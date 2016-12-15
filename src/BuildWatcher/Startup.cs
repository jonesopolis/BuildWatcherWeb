using System.IO;
using BuildWatcher.Mocks;
using BuildWatcher.Service;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using Microsoft.Net.Http.Server;
using Newtonsoft.Json;

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
            var settings = new JsonSerializerSettings();
            settings.ContractResolver = new SignalRContractResolver();

            var serializer = JsonSerializer.Create(settings);
            services.Add(new ServiceDescriptor(typeof(JsonSerializer),
                         provider => serializer,
                         ServiceLifetime.Transient));
                         
            services.AddSignalR(options => options.Hubs.EnableDetailedErrors = true);
            services.AddMvc();
            services.AddTransient<IBuildRepository>(s => Mockers.MockIBuildRepository());
            services.TryAddSingleton<IBuildMonitorService>(s => Mockers.MockIBuildMonitorService());
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
            app.UseWebSockets();
            app.UseSignalR();
        }

    }
}