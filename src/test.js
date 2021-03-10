import React from "react"
import { FormattedMessage, useIntl } from 'react-intl';

function test() {
  const intl = useIntl();

  return <FormattedMessage
    defaultMessage="defaultMessage"
    description="description"
  />
}
