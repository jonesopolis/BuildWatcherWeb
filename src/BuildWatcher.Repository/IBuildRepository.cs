using System.Collections.Generic;
using System.Threading.Tasks;
using BuildWatcher.Model;

namespace BuildWatcher.Repository
{
    public interface IBuildRepository
    {
        Task<RepositoryResult<List<RecentBuilds>>> GetAllBuilds();
        Task<RepositoryResult<List<RecentBuilds>>> GetSubscribedBuilds(string user);
        Task<RepositoryResult<RecentBuilds>> GetSingleBuild(string buildName);
        Task<RepositoryResult> SubscribeToBuild(string user, string buildName);
        Task<RepositoryResult> UnsubscribeFromBuild(string user, string buildName);
    }
}