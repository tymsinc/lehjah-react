# lehjah-react

The `lehjah-react` is a React component that allows you to easily embed the Lehjah accounting widget into your React applications via an iframe. This component enables seamless integration with your platform by passing in necessary configuration parameters.

## Installation

To install the package, use npm or yarn:

```bash
npm install lehjah-react
```

or

```bash
yarn add lehjah-react
```

## Usage

Here’s how to use the `Lehjah` component in your React project:

```jsx
import React from 'react';
import Lehjah from 'lehjah-react';

const MyApp = () => {
    return (
        <div style={{ width: '600px', height: '400px' }}>
            <Lehjah
                business_id="your-business-id"
                public_key="your-public-key"
                token="your-token"
                environment="sandbox" // or 'production'
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default MyApp;
```

## Props

### `business_id` (required)
- **Type:** `string`
- **Description:** The unique ID of the business on your platform. This is used to identify the business whose data will be displayed in the Lehjah widget.

### `public_key` (required)
- **Type:** `string`
- **Description:** Your Lehjah developer public key. This key is required to authenticate and authorize the widget with your Lehjah account.

### `token` (required)
- **Type:** `string`
- **Description:** The user authentication token on your platform, typically in the format of a bearer token. This token ensures that the widget displays the correct data for the authenticated user.

### `environment` (optional)
- **Type:** `'sandbox' | 'production'`
- **Default:** `'sandbox'`
- **Description:** Specifies the environment in which the widget will run. The default value is `'sandbox'`. Use `'production'` for live environments.

### `mode` (optional)
- **Type:** `'full' | 'page'`
- **Default:** `'full'`
- **Description:** Specifies the mode in which the widget will display. The default value is `'full'` which shows all the features together. Use `'page'` if you are only interested in a specific page.

### `page` (optional, only if mode equals `page`)
- **Type:** `'overview' | 'transactions' | 'invoices' | 'bills' | 'inventory' | 'restocks' | 'financial_statements' | 'income_statement' | 'balance_sheet' | 'trial_balance' | 'cashflow_statement' | 'manual_journal' | 'general_ledger' | 'chart_of_accounts'`
- **Description:** The specific feature to be displayed when the widget loads, this makes it possible for you to distribute the features into different pages on your platform.

### `variable1` (optional, alongside `variable2`, `variable3`, `variable4` and `variable5`)  
- **Type:** `any`
- **Description:** The variable1 and the other permitted variable names from 1 to 5 allows you to add up to five (5) custom variables you might need to extend the widget data connection capabilities.

### `width` (optional)
- **Type:** `string`
- **Default:** `'100%'`
- **Description:** The width of the iframe. Accepts any valid CSS width value.

### `height` (optional)
- **Type:** `string`
- **Default:** `'100%'`
- **Description:** The height of the iframe. Accepts any valid CSS height value.

## Request Access to Lehjah Sandbox

To request access to the Lehjah sandbox environment, visit [Lehjah Sandbox Access](https://cal.com/lehjah/request-access).

## License

This project is licensed under the MIT License.
