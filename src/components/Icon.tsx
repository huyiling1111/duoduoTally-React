

import cs from 'classnames';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type Props = {
  name?: string;
  onClick?:()=>void;
  className?:string;
};

const Icon = (props: Props) => {
  return (
    <svg className={cs('icon', props.className)} onClick={props.onClick}>
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  );
};

export default Icon;
