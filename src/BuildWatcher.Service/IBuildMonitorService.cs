using System;
using System.Collections.Generic;
using BuildWatcher.Model;

namespace BuildWatcher.Service
{
    public interface IBuildMonitorService
    {
        event EventHandler BuildAdded;
        event EventHandler<RecentBuilds> BuildStatusChanged;
        event EventHandler BuildRemoved;
        
        List<RecentBuilds> GetBuildResults(List<string> buildDefs);
    }
}
