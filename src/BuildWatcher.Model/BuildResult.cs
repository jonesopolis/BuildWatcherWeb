using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace BuildWatcher.Model
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum BuildResult
    {
        Success,
        Failure,
        PartialSuccess,
        InProgress,
        Unknown
    }
}