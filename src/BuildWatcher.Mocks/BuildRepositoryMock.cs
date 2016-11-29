using System.Collections.Generic;
using System.Threading.Tasks;
using BuildWatcher.Model;
using BuildWatcher.Repository;
using Moq;

namespace BuildWatcher.Mocks
{
    public static class BuildRepositoryMock
    {
        public static IBuildRepository GetMock()
        {
            var mock = new Mock<IBuildRepository>();

            mock.Setup(m => m.GetSubscribedBuildsForUser(It.IsAny<string>()))
                .Returns(() =>
            {
                var list = new List<Build>();

                var build = new Build();
                build.FriendlyName = "Company 1";
                build.Name = "Super Awesome Catchphrase!";
                list.Add(build);

                build = new Build();
                build.FriendlyName = "Company 2";
                build.Name = "Super Awesome Catchphrase!";
                list.Add(build);

                build = new Build();
                build.FriendlyName = "Company 3";
                build.Name = "Super Awesome Catchphrase!";
                list.Add(build);

                build = new Build();
                build.FriendlyName = "Company 4";
                build.Name = "Super Awesome Catchphrase!";
                list.Add(build);

                return Task.FromResult(RepositoryResult<List<Build>>.CreateSuccess(list));
            });

            mock.Setup(m => m.AddBuildSubscriptionForUser(It.IsAny<string>(), It.IsAny<string>()))
                .Returns(() => Task.FromResult(RepositoryResult.CreateSuccess()));

            return mock.Object;
        }
    }
}