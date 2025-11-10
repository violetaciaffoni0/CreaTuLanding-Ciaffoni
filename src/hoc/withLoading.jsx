export function withLoading = (Component) => {
function ComponentWithLoading(props){
   return (
    <Component {...props} />
   ) 
}
return ComponentWithLoading
}