using System;
using System.Threading.Tasks;
using BuildWatcher.Service;
using Microsoft.AspNetCore.SignalR;

namespace BuildWatcher.SignalR
{
    public class BuildMonitorHub : Hub
    {
        private readonly IBuildMonitorService _buildMonitorService;
        public BuildMonitorHub(IBuildMonitorService buildMonitorService)
        {
            if (buildMonitorService == null)
            {
                throw new ArgumentNullException(nameof(buildMonitorService));
            }

            _buildMonitorService = buildMonitorService;

            _buildMonitorService.BuildStatusChanged += (s, e) =>
            {
                Clients.All.buildUpdated(e);
            };
        }
    }
}