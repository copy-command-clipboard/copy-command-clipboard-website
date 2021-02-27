<template>
  <Detail>
    <p>You can send mail for questions and problems. I am waiting every time your feedback. Please help me for better development my project. You can fast reach me in email.</p>
    <a href="mailto:yasinburakkalkan@gmail.com" class="d-flex align-items-center mt-3"><GmailLogo class="mr-3" /> yasinburakkalkan@gmail.com</a>
  </Detail>
</template>

<script>
import Detail from "../components/detail";
import GmailLogo from "../components/logo/gmail";

export default {
  name: "Contact",
  components: {
    Detail,
    GmailLogo
  },
};
</script>
