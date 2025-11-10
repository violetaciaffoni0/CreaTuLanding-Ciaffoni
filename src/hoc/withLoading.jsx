// HOC: con loading
import { ClipLoader } from "react-spinners";

export const withLoading = (Component) => {
  function ComponentWithLoading(props) {
    if (!props.items || props.items.length < 1) {
      return <ClipLoader />;
    }
    return <Component {...props} />;
  }

  return ComponentWithLoading;
};
