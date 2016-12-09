namespace BuildWatcher.Model
{
    public class BuildResult
    {
        public string Name { get; set; }
        public string FriendlyName { get; set; }
        public LatestBuild LatestBuild { get; set; }
        public Build SecondaryBuild { get; set; }
        public Build TertiaryBuild { get; set; }
    }
}
