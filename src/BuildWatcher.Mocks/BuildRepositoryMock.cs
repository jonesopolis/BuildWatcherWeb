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

            mock.Setup(m => m.GetBuildsForUser(It.IsAny<string>())).Returns(() =>
            {
                var list = new List<Build>();

                var build = new Build();
                build.Name = "Super Build 1";
                build.FriendlyName = "Super Friendly Build 1";
                list.Add(build);

                build = new Build();
                build.Name = "Super Build 2";
                build.FriendlyName = "Super Friendly Build 2";
                list.Add(build);

                build = new Build();
                build.Name = "Super Build 3";
                build.FriendlyName = "Super Friendly Build 3";
                list.Add(build);

                build = new Build();
                build.Name = "Super Build 4";
                build.FriendlyName = "Super Friendly Build 4";
                list.Add(build);

                return Task.FromResult(list);
            });

            return mock.Object;
        }
    }
}