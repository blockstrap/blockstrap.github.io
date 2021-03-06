/*
 * 
 *  Blockstrap v0.8.0.1
 *  http://blockstrap.com
 *
 *  Designed, Developed and Maintained by Neuroware.io Inc
 *  All Work Released Under MIT License
 *  
 *  -- Including this file in the HTML header is the only requirement
 *  -- Everything else, including the loading of dependencies is handled here
 *  
 */

var blockstrap_options = {
    v: "0.8.0.1",
    id: "blockstrap",
    app_id: "framework",
    loader_id: "blockstrap",
    account_poll: true,
    install: false,
    public: false, 
    security: false,
    role: "admin",
    theme: "default",
    element: "body",
    less: false,
    test: false,
    refresh: true,
    cascade: true,
    html_base: "html/",
    data_base: "data/",
    core_base: "blockstrap/",
    theme_base: "themes/",
    dependency_base: "js/dependencies/",
    module_base: "js/modules/",
    page_base: "index",
    slug_base: "dashboard",
    store: [
        "app_url", 
        "your_name",
        "your_username",
        "your_password"
    ],
    base_url: "",
    content_id: "main-content",
    navigation_id: "navigation",
    mobile_nav_id: "mobile-footer",
    bootstrap: [
        "lists", 
        "jumbotrons", 
        "panels", 
        "tables", 
        "modals", 
        "forms", 
        "bars"
    ],
    buttons: { 
        classes: [
            "access", 
            "edit", 
            "hidden_toggler",
            "login", 
            "logout", 
            "page",
            "print",
            "refresh",
            "remove",
            "reset",
            "setup",
            "import",
            "toggle",
            "sign",
            "verify",
            "switch",
            "new_chain",
            "new_contract",
            "see_all",
            "check_inactive",
            "check_all_inactive",
            "add_contact_address",
            "contract_send",
            "contract_remove"
        ],
        ids: [
            "create-account",
            "create-contact",
            "create-credentials",
            "edit-object",
            "import-file",
            "more-security",
            "send-money",
            "set-credentials",
            "submit-import",
            "submit-payment",
            "submit-verification",
            "save-salt",
            "save-wallet"
        ]
    },
    styles: false,
    timeouts: {
        default: 750,
        loader: 750,
        isotope_delay: 750,
        clear_forms: 50, // Related to a strange firefox bug
        delayed_init: 750, // Are we sure we need this? Was 3000
        bs_buttons_submit_payment: 750, // Are we sure we need this? Was 6000
        bs_forms_switch_address: 750, // Are we sure we need this? Was 6000
        bs_widgets_request: 750, // Are we sure we need this? Was 6000
        es_buttons_confirm: 750, // Are we sure we need this? Was 6000
        es_ready_iso_delay: 750, // Are we sure we need this? Was 6000
        es_forms_edit: 750, // Are we sure we need this? Was 6000
        es_forms_record: 750, // Are we sure we need this? Was 6000
        es_instances_setup: 750, // Are we sure we need this? Was 6000
        es_txs_commit: 750, // Are we sure we need this? Was 6000
        es_txs_confirm: 750, // Are we sure we need this? Was 6000
        es_txs_prepare: 750, // Are we sure we need this? Was 6000
    },
    confirmations: {
        default: 0
    },
    contacts: [
        {
            name: "Blockstrap Donations",
            blockchains: {
                btc: ["1GjHvbkCyYpy3uaNPvHsxe2EptH2RxEvMt"],
                dash: ["Xhp3RfQKVCsqju3VEcHuMwcMPNbLszEGJG"],
                doge: ["DJHXpkQGcRydRvocWaeUtZir6c2pXHkUn4"],
                ltc: ["LbGtaXcsPDQpU6pA8k3sTDmCaG5qFUPAhP"],
                btct: ["miNyrRGBZkyVxw1RoKMLpEagCcftVQJD22"],
                dasht: ["y67MSj12Wm9YJA4291VPpnC8pGS128tH4J"],
                doget: ["ncq5H5EdCwmGVtQtquk2TKyXDTNApoDpwq"],
                ltct: ["moyssLnSTs6EBWDoyRMaXkUKnDmLCSXBte"]
            },
            contact_dnk: false
        }
    ],      
    tests: {
        api: {
            address: {
                request: "1Nz5RqevRodefPyGVB8EpdwSEGS4Ax2f1k",
                results: {
                    address: "1Nz5RqevRodefPyGVB8EpdwSEGS4Ax2f1k",
                    balance: 10019000,
                    blockchain: "btc",
                    hash: "f1260c3cd86ecc03ce460c303ec0e8006e32273d",
                    received: 10019000,
                    tx_count: 2
                }
            },
            addresses: {
                request: [
                    "1121cQLqCsDsLPAkJW5ddTCREZ7Bp4ufrk",
                    "12higDjoCCNXSA95xZMWUdPvXNmkAduhWv"
                ],
                results: [
                    {
                        address: "1121cQLqCsDsLPAkJW5ddTCREZ7Bp4ufrk",
                        balance: 0,
                        blockchain: "btc",
                        hash: "0030ececbad05ffcdff89f3f26e38ca3d735a8de",
                        received: 5000000000,
                        tx_count: 2
                    },
                    {
                        address: "12higDjoCCNXSA95xZMWUdPvXNmkAduhWv",
                        balance: 1,
                        blockchain: "btc",
                        hash: "12ab8dc588ca9d5787dde7eb29569da63c3a238c",
                        received: 7764439255613,
                        tx_count: 78
                    }
                ]
            },
            block: {
                request: "15968",
                results: {
                    blockchain: "btc",
                    hash: "00000000201016a83272835468d457d15965d57f57c0da5944dc94ea9389f360",
                    height: 15968,
                    next: "0000000037d7c9885177df7af395d2e99b176a9372a03b855abdf2c9adac90b1",
                    prev: "00000000abae6b44fa98526e865a08820f4528eda46cad40445de3690c502ae8",
                    time: 1243609567,
                    tx_count: 2
                }
            },
            relay: {
                request: "0100000001ec71e2ceac8476bea21fbc4a97062c000f07def6c8ef8d9171fb1a5e113418e0010000008c493046022100e6f39b4393794ef03b0f9dc71395e0835a211015b42ab4329cb6a6c1c8b3c6ea022100f1ccae451f35e5c5ad25a8f7e7b5e778bafc4dc69dd560fab1cbadbb88767916014104e1934263e84e202ebffca95246b63c18c07cd369c4f02de76dbd1db89e6255dacb3ab1895af0422e24e1d1099e80f01b899cfcdf9b947575352dbc1af57466b5ffffffff0210270000000000001976a914652c453e3f8768d6d6e1f2985cb8939db91a4e0588ace065f81f000000001976a914cf0dfe6e0fa6ea5dda32c58ff699071b672e1faf88ac00000000",
                results: false
            },
            transaction: {
                request: "06032a172f88ba823785f87341eab26ee7a2eb2de9d2f105220d6580e3affc16",
                results: {
                    block: 15968,
                    blockchain: "btc",
                    fees: 0,
                    input: 300000000000,
                    output: 300000000000,
                    size: 6883,
                    time: 1243609567,
                    txid: "06032a172f88ba823785f87341eab26ee7a2eb2de9d2f105220d6580e3affc16",
                    value: 300000000000
                }
            },
            transactions: {
                request: "1Nz5RqevRodefPyGVB8EpdwSEGS4Ax2f1k",
                results: [
                    {
                        block: 317958,
                        blockchain: "btc",
                        fees: 10000,
                        input: 1030000,
                        output: 1020000,
                        size: 668,
                        time: 1409255576,
                        txid: "5e441731363d19e7fb541600a944189724d1fd6863483b1d3903b2a2863aafa7",
                        value: 19000
                    },
                    {
                        block: 317957,
                        blockchain: "btc",
                        fees: 0,
                        input: 25000000,
                        output: 25000000,
                        size: 225,
                        time: 1409255541,
                        txid: "65e7df7f40e1a38626a98a150730e5ed42d4b6b648ca9ff66e035ec21903aca3",
                        value: 10000000
                    }
                ]
            },
            unspents: {
                request: "1Nz5RqevRodefPyGVB8EpdwSEGS4Ax2f1k",
                results: [
                    {
                        index: 0,
                        script: "76a914f1260c3cd86ecc03ce460c303ec0e8006e32273d88ac",
                        txid: "5e441731363d19e7fb541600a944189724d1fd6863483b1d3903b2a2863aafa7",
                        value: 19000
                    },
                    {
                        index: 0,
                        script: "76a914f1260c3cd86ecc03ce460c303ec0e8006e32273d88ac",
                        txid: "65e7df7f40e1a38626a98a150730e5ed42d4b6b648ca9ff66e035ec21903aca3",
                        value: 10000000
                    }
                ]
            }
        }
    },
    styles: {
        vars: {
            content_bg: "#DDD",
            header_bg: "#475862"
        },
        elements: {
            content_bg: "#main-content",
            header_bg: "header"
        },
        rules: {
            content_bg: "background",
            header_bg: "background"
        }
    },
    blockchains: {
        btct: {
            blockchain: "Bitcoin (Testnet)",
            lib: "bitcointestnet",
            apis: {
                blockcypher: "http://api.blockcypher.com/v1/btc/test3/",
                blocktrail: "https://api.blocktrail.com/v1/tBTC/",
                toshi: "https://testnet3.toshi.io/api/v0/",
                qt: "proxies/rpc.php?blockchain=btct"
            },
            fee: 0.0001,
            op_return: true,
            op_limit: 80
        },
        dasht: {
            blockchain: "DashPay (Testnet)",
            lib: "dashpaytestnet",
            apis: {
                
            },
            fee: 0.0001,
            op_return: true,
            op_limit: 80
        },
        doget: {
            blockchain: "Dogecoin (Testnet)",
            lib: "dogecointestnet",
            apis: {
                spinal: "http://spinal.neuroware.io/v1/doget/",
            },
            fee: 2,
            op_return: true,
            op_limit: 80
        },
        ltct: {
            blockchain: "Litecoin (Testnet)",
            lib: "litecointestnet",
            apis: {
                
            },
            fee: 0.001,
            op_return: true,
            op_limit: 80
        },
        multi: {
            private: true,
            apis: {

            }
        },
        btc: {
            blockchain: "Bitcoin",
            lib: "bitcoin",
            apis: {
                blockcypher: "http://api.blockcypher.com/v1/btc/main/",
                blocktrail: "https://api.blocktrail.com/v1/btc/",
                spinal: "http://spinal.neuroware.io/v1/btc/",
                toshi: "https://bitcoin.toshi.io/api/v0/"
            },
            fee: 0.0001,
            op_return: true,
            op_limit: 80
        },
        dash: {
            blockchain: "DashPay",
            lib: "dashpay",
            apis: {
                
            },
            fee: 0.0001,
            op_return: true,
            op_limit: 80
        },
        doge: {
            blockchain: "Dogecoin",
            lib: "dogecoin",
            apis: {
                blockcypher: "http://api.blockcypher.com/v1/doge/main/",
                qt: "proxies/rpc.php?blockchain=doge",
                spinal: "https://api.neuroware.io/v2/doge/"
            },
            fee: 1,
            op_return: true,
            op_limit: 80
        },
        ltc: {
            blockchain: "Litecoin",
            lib: "litecoin",
            apis: {
                
            },
            fee: 0.001,
            op_return: true,
            op_limit: 80
        }
    },
    apis: {
        available: {
            blockcypher: "BlockCypher",
            blocktrail: "BlockTrail",
            qt: "Local QTs",
            spinal: "Spinal",
            toshi: "Toshi"
        },
        defaults: {
            blockcypher: {
                async: false,
                functions: {
                    to: {
                        address: "addrs/$call/full",
                        addresses: "addrs/$call/full",
                        block: "blocks/",
                        op_returns: "addrs/$call/full",
                        relay: "txs/push/",
                        relay_param: "tx",
                        relay_json: "tx",
                        transaction: "txs/",
                        transactions: "addrs/$call/full",
                        unspents: "addrs/$call?unspentOnly=true&includeScript=true"
                    },
                    from: {
                        address: {
                            key: "",
                            address: "address",
                            hash: "",
                            tx_count: "final_n_tx",
                            received: "total_received",
                            balance: "final_balance"
                        },
                        addresses: {
                            key: "",
                            address: "address",
                            hash: "",
                            tx_count: "final_n_tx",
                            received: "total_received",
                            balance: "final_balance"
                        },
                        block: {
                            key: "",
                            height: "height",
                            hash: "hash",
                            prev: "prev_block",
                            next: "",
                            next: "",
                            tx_count: "n_tx",
                            time: "[time, utctoepoch]"
                        },
                        op_returns: {
                            key: "",
                            inner: "txs",
                            txid: "hash",
                            data: "script"
                        },
                        relay: {
                            txid: "hash",
                            inner: "tx"
                        },
                        transaction: {
                            key: "",
                            txid: "hash",
                            size: "size",
                            block: "block_height",
                            time: "[received, utctoepoch]",
                            input: "[total, +, fees, int]",
                            output: "total",
                            value: "[total, -, fees, int]",
                            fees: "fees",
                            data: "transactions.outputs.data_string"
                        },
                        transactions: {
                            key: "",
                            inner: "txs",
                            txid: "hash",
                            size: "size",
                            block: "block_height",
                            time: "[received, utctoepoch]",
                            input: "[total, +, fees, int]",
                            output: "total",
                            value: "[outputs, value]",
                            fees: "fees",
                            data: "transactions.outputs.data_string",
                            transactions: "txs"
                        },
                        unspents: {
                            key: "",
                            inner: "txrefs",
                            inner_unconfirmed: "unconfirmed_txrefs",
                            confirmations: "confirmations",
                            txid: "tx_hash",
                            index: "tx_output_n",
                            value: "value",
                            script: "script"
                        }
                    }
                }
            },
            blocktrail: {
                async: false,
                functions: {
                    to: {
                        address: "address/$call",
                        unspents: "address/$call/unspent-outputs",
                        transactions: "address/$call/transactions",
                        op_returns: "address/$call/transactions",
                        transaction: "transaction/$call",
                        block: "block/$call"
                    },
                    from: {
                        address: {
                            key: "",
                            address: "address",
                            hash: "[hash160, lowercase]",
                            tx_count: "transactions",
                            received: "received",
                            balance: "balance"
                        },
                        unspents: {
                            key: "",
                            inner: "../",
                            confirmations: "confirmations",
                            txid: "hash",
                            index: "index",
                            value: "value",
                            script: "script_hex",
                            reverse_array: true
                        },
                        transaction: {
                            key: "",
                            txid: "hash",
                            size: "",
                            block: "block_height",
                            time: "[last_seen_at, utctoepoch]",
                            input: "total_input_value",
                            output: "total_output_value",
                            value: "estimated_value",
                            fees: "total_fee",
                            data: false
                        },
                        transactions: {
                            key: "",
                            inner: "../",
                            txid: "hash",
                            size: false,
                            block: false,
                            time: "[time, utctoepoch]",
                            input: "total_input_value",
                            output: "total_output_value",
                            value: "[value, amount_minus_output_check]",
                            fees: "total_fee",
                            data: false,
                            reverse_array: true
                        },
                        block: {
                            key: "",
                            height: "height",
                            hash: "hash",
                            prev: "prev_block",
                            next: "next_block",
                            tx_count: "transactions",
                            time: "[block_time, utctoepoch]"
                        },
                        op_returns: {
                            key: "",
                            inner: "../",
                            txid: "hash",
                            data: "script_hex"
                        }
                    }
                }
            },
            qt: {
                async: false,
                type: "rpc",
                functions: {
                    to: {
                        address: "&call=address&id=",
                        block: "&call=block&id=",
                        dnkey: "&call=dnkey&id=",
                        dnkeys: "&call=dnkey&id=",
                        op_returns: "&call=op_returns&id=",
                        relay: "&call=relay&id=",
                        relay_param: "tx",
                        transaction: "&call=transaction&id=",
                        transactions: "&call=transactions&id=",
                        unspents: "&call=unspents&id=",
                    },
                    from: {
                        address: {
                            key: "results",
                            address: "address",
                            hash: "hash",
                            tx_count: "tx_count",
                            received: "received",
                            balance: "balance"
                        },
                        block: {
                            key: "results",
                            height: "height",
                            hash: "hash",
                            prev: "prev",
                            next: "next",
                            tx_count: "tx_count",
                            time: "time"
                        },
                        dnkey: {
                            key: "results",
                            dnkeys: "dnkeys"
                        },
                        dnkeys: {
                            key: "results",
                            dnkeys: "dnkeys"
                        },
                        op_returns: {
                            key: "results",
                            inner: "txs",
                            txid: "txid",
                            data: "data"
                        },
                        relay: {
                            key: "results",
                            txid: "txid"
                        },
                        transaction: {
                            key: "results",
                            txid: "txid",
                            size: "size",
                            block: "block",
                            time: "time",
                            input: "input",
                            output: "output",
                            value: "value",
                            fees: "fees"
                        },
                        transactions: {
                            key: "results",
                            inner: "txs",
                            txid: "txid",
                            size: "size",
                            block: "block",
                            time: "time",
                            input: "input",
                            output: "output",
                            value: "value",
                            fees: "fees"
                        },
                        unspents: {
                            key: "results",
                            inner: "txs",
                            confirmations: "confirmations",
                            txid: "txid",
                            index: "index",
                            value: "value",
                            script: "script"
                        }
                    }
                }
            },
            spinal: {
                async: false,
                key: [],
                key_name: "",
                functions: {
                    to: {
                        address: 'addr/$call/1/txfull',
                        dnkeys: 'dnkey/',
                        op_returns: "addr/$call/1/txfull",
                        relay: "tx/relay/",
                        relay_param: "tx",
                        relay_json: "tx",
                        transaction: "tx/$call/verbose",
                        transactions: "addr/$call/1/txfull",
                        unspents: "addr/$call/1/unspent"
                    },
                    from: {
                        address: {
                            key: "",
                            address: "address",
                            hash: "address_hash160",
                            tx_count: "transaction_count_total",
                            received: "inputs_value_confirmed",
                            balance: "[tx_list]"
                        },
                        dnkeys: {
                            key: "",
                            dnkeys: "dnkeys"
                        },
                        op_returns: {
                            key: "",
                            inner: "tx_list",
                            txid: "id",
                            data: "script_hex"
                        },
                        relay: {
                            key: "",
                            txid: "tx"
                        },
                        transaction: {
                            key: "",
                            txid: "id",
                            size: "N/A",
                            block: "block_height",
                            time: "time",
                            input: "input_value",
                            output: "output_value",
                            value: "N/A",
                            fees: "fees_value"
                        },
                        transactions: {
                            key: "tx_list",
                            txid: "id",
                            size: "N/A",
                            block: "block_height",
                            time: "time",
                            input: "input_value",
                            output: "output_value",
                            value: "N/A",
                            fees: "fees_value"
                        },
                        unspents: {
                            key: "",
                            inner: "uxto_list",
                            confirmations: "",
                            txid: "tx_hash",
                            index: "pos",
                            value: "value",
                            script: "script_hex"
                        }
                    }
                }
            },
            toshi: {
                async: false,
                key: [],
                key_name: "",
                functions: {
                    to: {
                        address: "addresses/$call/transactions",
                        unspents: "addresses/$call/unspent_outputs",
                        transactions: "addresses/$call/transactions",
                        op_returns: "addresses/$call/transactions",
                        transaction: "transactions/$call",
                        relay: "transactions",
                        relay_param: "hex",
                        relay_json: true,
                        block: "blocks/$call"
                    },
                    from: {
                        address: {
                            key: "",
                            address: "hash",
                            hash: "[transactions.outputs, hash_from_script]",
                            tx_count: "[transactions, count]",
                            received: "received",
                            balance: "balance"
                        },
                        unspents: {
                            key: "",
                            inner: "",
                            confirmations: "confirmations",
                            txid: "transaction_hash",
                            index: "output_index",
                            value: "amount",
                            script: "script_hex"
                        },
                        transaction: {
                            key: "",
                            txid: "hash",
                            size: "size",
                            block: "block_height",
                            time: "[block_time, utctoepoch]",
                            input: "amount",
                            output: "amount",
                            value: "amount",
                            fees: "fees"
                        },
                        transactions: {
                            key: "",
                            inner: "transactions",
                            inner_unconfirmed: "unconfirmed_transactions",
                            txid: "hash",
                            size: "size",
                            block: "block_height",
                            time: "[block_time, utctoepoch]",
                            input: "[inputs.amount, total]",
                            output: "[outputs.amount, total]",
                            value: "[amount, amount_minus_output_check]",
                            fees: "fees",
                            data: false
                        },
                        block: {
                            key: "",
                            height: "height",
                            hash: "hash",
                            prev: "previous_block_hash",
                            next: "[next_blocks.hash, object_in_array]",
                            tx_count: "transactions_count",
                            time: "[time, utctoepoch]"
                        },
                        relay: {
                            key: "",
                            txid: "hash"
                        },
                        op_returns: {
                            key: "",
                            inner: "transactions",
                            inner_unconfirmed: "unconfirmed_transactions",
                            txid: "hash",
                            data: "script_hex"
                        }
                    }
                }
            }
        }
    }
};

if(typeof bs_secrets != 'undefined')
{
    blockstrap_options.keys = bs_secrets;
}
    
var blockstrap_defaults = JSON.stringify(blockstrap_options);