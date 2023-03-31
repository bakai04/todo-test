import { compose } from "@/shared/lib";
import { AppProps } from "next/app";
import { withRedux, withToast } from "./providers";

const MyApp = (props: AppProps) => <props.Component {...props.pageProps} />;

export const Application = compose(withRedux, withToast)(MyApp);
