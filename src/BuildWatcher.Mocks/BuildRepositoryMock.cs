using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BuildWatcher.Model;
using BuildWatcher.Repository;
using Moq;

namespace BuildWatcher.Mocks
{
    public static class BuildRepositoryMock
    {
        private static List<BuildResult> _list = GetList();

        private static List<BuildResult> GetList()
        {
            var list = new List<BuildResult>();

            var buildResult = new BuildResult();
            buildResult.FriendlyName = "Very Great Company!";
            buildResult.Name = "Company 1";
            buildResult.LatestBuild = new LatestBuild { RequestedBy = "David", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.SecondaryBuild = new Build { RequestedBy = "Kat", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.TertiaryBuild = new Build { RequestedBy = "Elijah", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            list.Add(buildResult);

            buildResult = new BuildResult();
            buildResult.FriendlyName = "Super Awesome Company!";
            buildResult.Name = "Company 2";
            buildResult.LatestBuild = new LatestBuild { RequestedBy = "David", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.SecondaryBuild = new Build { RequestedBy = "Kat", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.TertiaryBuild = new Build { RequestedBy = "Elijah", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            list.Add(buildResult);

            buildResult = new BuildResult();
            buildResult.FriendlyName = "World's Best Company!";
            buildResult.Name = "Company 3";
            buildResult.LatestBuild = new LatestBuild { RequestedBy = "David", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.SecondaryBuild = new Build { RequestedBy = "Kat", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.TertiaryBuild = new Build { RequestedBy = "Elijah", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            list.Add(buildResult);

            buildResult = new BuildResult();
            buildResult.FriendlyName = "Most Amazing Company";
            buildResult.Name = "Company 4";
            buildResult.LatestBuild = new LatestBuild { RequestedBy = "David", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.SecondaryBuild = new Build { RequestedBy = "Kat", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            buildResult.TertiaryBuild = new Build { RequestedBy = "Elijah", Start = DateTime.Now, Length = TimeSpan.FromMinutes(3) };
            list.Add(buildResult);

            return list;
        }

        public static IBuildRepository GetMock()
        {
            var mock = new Mock<IBuildRepository>();

            mock.Setup(m => m.GetSubscribedBuilds(It.IsAny<string>()))
                .Returns(() => Task.FromResult(RepositoryResult<List<BuildResult>>.CreateSuccess(_list)));

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

            return mock.Object;
        }
    }
}