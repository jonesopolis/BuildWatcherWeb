namespace BuildWatcher.Model
{
    public class RecentBuilds
    {
        public string Name { get; set; }
        public string FriendlyName { get; set; }
        public Build LatestBuild { get; set; }
        public Build SecondaryBuild { get; set; }
        public Build TertiaryBuild { get; set; }
    }
}
