import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentProps} from 'next/document';
import Cookies from 'js-cookie';

interface MyDocumentInitialProps extends DocumentInitialProps {
  isDark?: boolean;
}

interface MyDocumentProps extends DocumentProps {
  isDark: boolean;
}

export default class MyDocument extends Document<MyDocumentProps> {

  static async getInitialProps(ctx) {
    const { isDark } = ctx.req.cookies;

    const initialProps: MyDocumentInitialProps = await super.getInitialProps(ctx);
    initialProps.isDark = Boolean(Number(isDark));

    return initialProps;
  }

  render() {
    return (
      <Html className={this.props.isDark ? 'dark-mode' : ''}>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&family=Material+Icons&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
