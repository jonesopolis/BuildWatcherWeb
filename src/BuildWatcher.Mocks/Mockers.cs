using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using BuildWatcher.Model;
using BuildWatcher.Service;
using Moq;

namespace BuildWatcher.Mocks
{
    public static class Mockers
    {
        private static readonly List<RecentBuilds> _list = GetList();
        private static readonly Random _r = new Random();

        private static List<RecentBuilds> GetList()
        {
            var list = new List<RecentBuilds>();

            var buildResult = new RecentBuilds();
            buildResult.FriendlyName = "Very Great Company!";
            buildResult.Name = "Company 1";
            buildResult.LatestBuild = new Build { Result = BuildResult.Success, RequestedBy = "David", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.SecondaryBuild = new Build { Result = BuildResult.Failure, RequestedBy = "Kat", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.TertiaryBuild = new Build { Result = BuildResult.Success, RequestedBy = "Elijah", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            list.Add(buildResult);

            buildResult = new RecentBuilds();
            buildResult.FriendlyName = "Super Awesome Company!";
            buildResult.Name = "Company 2";
            buildResult.LatestBuild = new Build { Result = BuildResult.PartialSuccess, RequestedBy = "David", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.SecondaryBuild = new Build { Result = BuildResult.Success, RequestedBy = "Kat", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.TertiaryBuild = new Build { Result = BuildResult.Success, RequestedBy = "Elijah", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            list.Add(buildResult);

            buildResult = new RecentBuilds();
            buildResult.FriendlyName = "World's Best Company!";
            buildResult.Name = "Company 3";
            buildResult.LatestBuild = new Build { Result = BuildResult.InProgress, RequestedBy = "David", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.SecondaryBuild = new Build { Result = BuildResult.Success, RequestedBy = "Kat", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.TertiaryBuild = new Build { Result = BuildResult.Success, RequestedBy = "Elijah", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            list.Add(buildResult);

            buildResult = new RecentBuilds();
            buildResult.FriendlyName = "Most Amazing Company";
            buildResult.Name = "Company 4";
            buildResult.LatestBuild = new Build { Result = BuildResult.Success, RequestedBy = "David", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.SecondaryBuild = new Build { Result = BuildResult.PartialSuccess, RequestedBy = "Kat", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.TertiaryBuild = new Build { Result = BuildResult.Failure, RequestedBy = "Elijah", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            list.Add(buildResult);

            return list;
        }
        
        public static IBuildRepository MockIBuildRepository()
        {
            var mock = new Mock<IBuildRepository>();

            mock.Setup(m => m.GetSubscribedBuilds(It.IsAny<string>()))
                .Returns(() => Task.FromResult(RepositoryResult<List<RecentBuilds>>.CreateSuccess(_list)));

            mock.Setup(m => m.SubscribeToBuild(It.IsAny<string>(), It.IsAny<string>()))
                .Returns<string, string>((user, build) =>
                {
                    if (_list.Any(b => b.Name == build))
                    {
                        return Task.FromResult(RepositoryResult.CreateInvalid());
                    }

                    var item = GetList().FirstOrDefault(b => b.Name == build);
                    if(item == null)
                    {
                        return Task.FromResult(RepositoryResult.CreateInvalid());
                    }

                    _list.Add(item);
                    return Task.FromResult(RepositoryResult.CreateSuccess());
                });

            mock.Setup(m => m.UnsubscribeFromBuild(It.IsAny<string>(), It.IsAny<string>()))
                .Returns<string, string>((user, build) =>
                {
                    var item = _list.FirstOrDefault(b => b.Name == build);

                    if (item == null)
                    {
                        return Task.FromResult(RepositoryResult.CreateInvalid());
                    }
                    
                    _list.Remove(item);
                    return Task.FromResult(RepositoryResult.CreateSuccess());
                });

            mock.Setup(m => m.GetAllBuilds())
                .Returns(Task.FromResult(RepositoryResult<List<RecentBuilds>>.CreateSuccess(GetList())));
            
            mock.Setup(m => m.GetSingleBuild(It.IsAny<string>()))
                .Returns<string>(b => Task.FromResult(RepositoryResult<RecentBuilds>.CreateSuccess(GetList().First(bb => bb.Name == b))));

            return mock.Object;
        }

        public static IBuildMonitorService MockIBuildMonitorService()
        {
            var mock = new Mock<IBuildMonitorService>();

            new Timer(_ =>
            {
                if (!_list.Any())
                {
                    return;
                }

                var build = _list[0];//r.Next(0, _list.Count)];

                build.TertiaryBuild = build.SecondaryBuild;
                build.SecondaryBuild = build.LatestBuild;
                if (build.SecondaryBuild.Result == BuildResult.InProgress)
                {
                    build.SecondaryBuild.Result = _r.Next(0, 2) % 2 == 0 ? BuildResult.Success : BuildResult.Failure;
                }

                var latest = new Build();
                latest.RequestedBy = new[] {"David", "Kat", "Elijah", "Atlas"}[_r.Next(0, 4)];
                latest.Start = DateTime.Now.AddMinutes(_r.Next(3, 15) * -1);
                latest.Length = DateTime.Now - latest.Start;

                switch (_r.Next(0, 5))
                {
                    case 0: latest.Result = BuildResult.Success; break;
                    case 1: latest.Result = BuildResult.Failure; break;
                    case 2: latest.Result = BuildResult.InProgress; break;
                    case 3: latest.Result = BuildResult.PartialSuccess; break;
                    case 4: latest.Result = BuildResult.Unknown; break;
                }

                build.LatestBuild = latest;
                mock.Raise(m => m.BuildStatusChanged += (s,e) => { }, null, build);

            },null,0, 5000);
            
            return mock.Object;
        }
    }
}