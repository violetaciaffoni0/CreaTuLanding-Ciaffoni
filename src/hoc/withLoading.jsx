import { ClipLoader } from "react-spinners";

export const withLoading = (Component) => {
  return function ComponentWithLoading({ loading, items, ...props }) {
    if (loading) return <ClipLoader />;
    return <Component items={items} {...props} />;
  };
};
