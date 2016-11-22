namespace BuildWatcher.Repository
{
    public class RepositoryResult
    {
        public RepositoryResultCode ResultCode { get; }
        public bool IsSuccess { get; }
        protected RepositoryResult(RepositoryResultCode resultCode)
        {
            ResultCode = resultCode;
            IsSuccess = ResultCode == RepositoryResultCode.Success;
        }

        internal static RepositoryResult CreateSuccess() => new RepositoryResult(RepositoryResultCode.Success);
        internal static RepositoryResult CreateNotFound() => new RepositoryResult(RepositoryResultCode.NotFound);
    }

    public sealed class RepositoryResult<T> : RepositoryResult
    {
        public T ResultObject { get; set; }

        private RepositoryResult(RepositoryResultCode resultCode, T item = default(T)) : base(resultCode)
        {
            ResultObject = item;
        }

        internal static RepositoryResult<T> CreateSuccess(T item) => new RepositoryResult<T>(RepositoryResultCode.Success, item);
        internal new static RepositoryResult<T> CreateNotFound() => new RepositoryResult<T>(RepositoryResultCode.NotFound);
    }

    public enum RepositoryResultCode
    {
        Success,
        NotFound
    }
}