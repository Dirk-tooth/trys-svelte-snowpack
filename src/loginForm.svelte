<script>
    import OktaSignIn from "@okta/okta-signin-widget";

    // const signIn = new OktaSignIn({
    //     baseUrl: process.env.OKTA_ORG_URL,
    //     clientId: process.env.CLIENT_ID,
    //     authParams: {
    //     issuer: `${process.env.OKTA_ORG_URL}/oauth2/default`,
    //     responseType: ["token", "id_token"],
    //     display: "page"
    //     }
    // });

    const signIn = new OktaSignIn({
        baseUrl: import.meta.env.OKTA_ORG_URL,
        clientId: import.meta.env.CLIENT_ID,
        authParams: {
        issuer: `${import.meta.env.OKTA_ORG_URL}/oauth2/default`,
        responseType: ["token", "id_token"],
        display: "page"
        }
    });
</script>

<style>

</style>

<div id="okta-login-container">

</div>