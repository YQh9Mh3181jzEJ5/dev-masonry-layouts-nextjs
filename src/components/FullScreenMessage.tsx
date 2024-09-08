export const FullScreenMessage = ({ message }: { message: string }) => (
  <div className="min-h-screen flex items-center justify-center">
    <p className="text-2xl text-center">{message}</p>
  </div>
);

export default FullScreenMessage;
