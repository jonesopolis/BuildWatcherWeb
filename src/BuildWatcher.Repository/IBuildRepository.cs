using System.Collections.Generic;
using System.Threading.Tasks;
using BuildWatcher.Model;

namespace BuildWatcher.Repository
{
    public interface IBuildRepository
    {
        Task<List<Build>> GetBuildsForUser(string user);
    }
}