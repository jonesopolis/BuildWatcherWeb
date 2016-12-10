//using System;
//using System.Collections.Generic;
//using System.Security.Claims;
//using System.Threading.Tasks;
//using BuildWatcher.Controllers;
//using BuildWatcher.Model;
//using BuildWatcher.Repository;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.VisualStudio.TestTools.UnitTesting;
//using Moq;

//namespace BuildWatcher.Test
//{
//    [TestClass]
//    public class HomeControllerTests
//    {
//        private ControllerContext _context;

//        [TestInitialize]
//        public void Init()
//        {
//            var user = new ClaimsPrincipal(new ClaimsIdentity(new[]
//            {
//                new Claim(ClaimTypes.Name, "David")
//            }));

//            _context = new ControllerContext
//            {
//                HttpContext = new DefaultHttpContext { User = user }
//            };
//        }

//        [TestMethod]
//        public async Task HomeControllerIndex_ValidUser_ReturnsOk()
//        {
//            var mock = new Mock<IBuildRepository>();
//            mock.Setup(m => m.GetSubscribedBuilds(It.IsAny<string>()))
//                .ReturnsAsync(RepositoryResult<List<Build>>.CreateSuccess(new List<Build>()));

//            var controller = new HomeController();
//            controller.ControllerContext = _context;

//            var result = await controller.Index();
//            Assert.IsInstanceOfType(result, typeof(ViewResult));
//        }

//        [TestMethod]
//        public async Task HomeControllerIndex_InvalidUser_Returns500()
//        {
//            var mock = new Mock<IBuildRepository>();
//            mock.Setup(m => m.GetSubscribedBuilds(It.IsAny<string>()))
//                .ReturnsAsync(RepositoryResult<List<Build>>.CreateNotFound());

//            var controller = new HomeController();
//            controller.ControllerContext = _context;

//            var result = await controller.Index();
//            var statusCode = result as StatusCodeResult;
//            Assert.IsTrue(statusCode != null && statusCode.StatusCode == 500);
//        }
//    }
//}