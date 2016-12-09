using System;
using System.Threading.Tasks;
using BuildWatcher.Repository;
using Microsoft.AspNetCore.Mvc;

namespace BuildWatcher.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public async Task<IActionResult> Index()
        {
            return View("~/wwwroot/index.html");
        }
    }
}