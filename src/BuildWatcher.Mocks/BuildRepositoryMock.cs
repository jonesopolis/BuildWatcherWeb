using System.Collections.Generic;
using System.Threading.Tasks;
using BuildWatcher.Model;
using BuildWatcher.Repository;
using Moq;

namespace BuildWatcher.Mocks
{
    public static class BuildRepositoryMock
    {
        public static IUserRepository GetMock()
        {
            var mock = new Mock<IUserRepository>();

            mock.Setup(m => m.GetBuilds(It.IsAny<string>()))
                .Returns(() =>
            {
                var list = new List<Build>();

                var build = new Build();
                build.FriendlyName = "Very Great Company!";
                build.Name = "Company 1";
                build.IsSubscribed = false;
                list.Add(build);

                build = new Build();
                build.FriendlyName = "Super Awesome Company!";
                build.Name = "Company 2";
                build.IsSubscribed = false;
                list.Add(build);

                build = new Build();
                build.FriendlyName = "World's Best Company!";
                build.Name = "Company 3";
                build.IsSubscribed = true;
                list.Add(build);

                build = new Build();
                build.FriendlyName = "Most Amazing Company";
                build.Name = "Company 4";
                build.IsSubscribed = false;
                list.Add(build);

                return Task.FromResult(RepositoryResult<List<Build>>.CreateSuccess(list));
            });

            mock.Setup(m => m.AddBuildSubscriptionForUser(It.IsAny<string>(), It.IsAny<string>()))
                .Returns(() => Task.FromResult(RepositoryResult.CreateSuccess()));

            return mock.Object;
        }
    }
}