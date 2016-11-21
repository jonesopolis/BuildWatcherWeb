using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BuildWatcher.Model;

namespace BuildWatcher.Repository
{
    public class BuildRepository : IBuildRepository
    {
        Task<List<Build>> IBuildRepository.GetBuildsForUser(string user)
        {
            throw new NotImplementedException();
        }
    }
}