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
        public async Task<IActionResult> GetBuildsForUser()
        {
            var result = await _buildRepo.GetSubscribedBuilds(User.Identity.Name);
            if (result.IsSuccess)
            {
                return Ok(result.ResultObject);
            }

            return new StatusCodeResult(500);
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllBuilds()
        {
            var result = await _buildRepo.GetAllBuilds();
            if (result.IsSuccess)
            {
                return Ok(result.ResultObject);
            }

            return new StatusCodeResult(500);
        }
        
        [HttpGet("subscribe/{buildName}")]
        public async Task<IActionResult> SubscribeUserToBuild(string buildName)
        {
            var result = await _buildRepo.SubscribeToBuild(User.Identity.Name, buildName);

            if (result.IsSuccess)
            {
                return Ok();
            }

            if (result.ResultCode == RepositoryResultCode.InvalidOperation)
            {
                return new StatusCodeResult(405);
            }

            return new StatusCodeResult(500);
        }

        [HttpGet("unsubscribe/{buildName}")]
        public async Task<IActionResult> UnsubscribeUserFromBuild(string buildName)
        {
            var result = await _buildRepo.UnsubscribeFromBuild(User.Identity.Name, buildName);

            if (result.IsSuccess)
            {
                return Ok();
            }
            
            if(result.ResultCode == RepositoryResultCode.InvalidOperation)
            {
                return new StatusCodeResult(405);
            }

            return new StatusCodeResult(500);
        }
    }
}


