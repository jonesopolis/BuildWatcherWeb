using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using BuildWatcher.Model;

namespace BuildWatcher.Repository
{
    public interface IBuildMonitor
    {
        event EventHandler BuildAdded;
        event EventHandler BuildStatusChanged;
        event EventHandler BuildRemoved;

        IEnumerable<string> GetAllBuildDefinitions();

        List<BuildResult> GetBuildResults(List<string> buildDefs);
    }
}
