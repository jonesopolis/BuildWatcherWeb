using System;
using System.Threading.Tasks;
using BuildWatcher.Repository;
using Microsoft.AspNetCore.Mvc;

namespace BuildWatcher.Controllers
{
    [Route("api/builds")]
    public class BuildController : Controller
    {
        private readonly IBuildRepository _buildRepo;

        public BuildController(IBuildRepository buildRepo)
        {
            if (buildRepo == null)
            {
                throw new ArgumentNullException(nameof(buildRepo));
            }

            _buildRepo = buildRepo;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetBuilds()
        {
            var result = await _buildRepo.GetBuilds(User.Identity.Name);
            if (result.IsSuccess)
            {
                return Ok(result.ResultObject);
            }

            return new StatusCodeResult(500);
        }
    }
}


