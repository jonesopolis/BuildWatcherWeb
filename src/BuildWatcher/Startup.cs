using System.IO;
using BuildWatcher.Mocks;
using BuildWatcher.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Net.Http.Server;

namespace BuildWatcher
{
    public class Startup
    {
        public static void Main()
        {
            var host = new WebHostBuilder()
                .UseWebListener(options =>
                {
                    options.ListenerSettings.Authentication.Schemes = AuthenticationSchemes.NTLM;
                    options.ListenerSettings.Authentication.AllowAnonymous = false;
                })
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddTransient<IBuildRepository>(s => BuildRepositoryMock.GetMock());
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();

            app.UseMvcWithDefaultRoute();
        }

    }
}