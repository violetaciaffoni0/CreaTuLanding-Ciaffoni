import { ClipLoader } from "react-spinners";

const withLoading = (Component) => {
  return function ComponentWithLoading({ loading, items, ...props }) {
    if (loading) return <ClipLoader />;

    return <Component items={items} {...props} />;
  };
};

export default withLoading;
