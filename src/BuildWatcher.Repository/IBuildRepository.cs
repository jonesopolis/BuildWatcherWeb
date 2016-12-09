using System.Collections.Generic;
using System.Threading.Tasks;
using BuildWatcher.Model;

namespace BuildWatcher.Repository
{
    public interface IBuildRepository
    {
        Task<RepositoryResult<List<BuildResult>>> GetSubscribedBuilds(string user);
        Task<RepositoryResult> SubscribeToBuild(string user, string build);
        Task<RepositoryResult> UnsubscribeFromBuild(string user, string build);
    }
}