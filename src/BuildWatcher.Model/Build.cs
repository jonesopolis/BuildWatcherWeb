using System;

namespace BuildWatcher.Model
{
    public class Build
    {
        public string RequestedBy { get; set; }
        public DateTime Start { get; set; }
        public TimeSpan Length { get; set; }
        public BuildResult Result { get; set; }
    }
}