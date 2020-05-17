import Link from 'next/link'
import Head from 'next/head'
import { Client,CryptoTransferTransaction } from "@hashgraph/sdk";
import {OPERATOR_ID,OPERATOR_KEY} from "../keys";

export default function UseFund() {

return (
  <>
  <Head>
    <title>UseFund</title>
  </Head>
    <h1>UseFund</h1>
    <h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h2>
  </>
)
}