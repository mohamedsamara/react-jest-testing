interface InlineErrorProps {
  message: string;
}

export const INLINE_ERROR_TEST_ID = 'inline-error';

const InlineError = (props: InlineErrorProps) => {
  const { message } = props;
  return (
    <p data-testid={INLINE_ERROR_TEST_ID} className="block mt-2 text-red-800">
      {message}
    </p>
  );
};

export default InlineError;
