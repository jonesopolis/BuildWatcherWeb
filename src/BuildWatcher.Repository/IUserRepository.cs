using System.Collections.Generic;
using System.Threading.Tasks;
using BuildWatcher.Model;

namespace BuildWatcher.Repository
{
    public interface IUserRepository
    {
        Task<RepositoryResult<List<Build>>> GetBuilds(string user);
        Task<RepositoryResult> AddBuildSubscriptionForUser(string user, string build);
    }
}