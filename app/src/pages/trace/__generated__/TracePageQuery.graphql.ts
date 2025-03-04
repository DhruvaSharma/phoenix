/**
 * @generated SignedSource<<ef375e967df02b7830177eb14e4f8b3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MimeType = "json" | "text";
export type SpanKind = "agent" | "chain" | "embedding" | "llm" | "reranker" | "retriever" | "tool" | "unknown";
export type SpanStatusCode = "ERROR" | "OK" | "UNSET";
export type TracePageQuery$variables = {
  traceId: string;
};
export type TracePageQuery$data = {
  readonly spans: {
    readonly edges: ReadonlyArray<{
      readonly span: {
        readonly attributes: string;
        readonly context: {
          readonly spanId: string;
        };
        readonly documentEvaluations: ReadonlyArray<{
          readonly documentPosition: number;
          readonly explanation: string | null;
          readonly label: string | null;
          readonly name: string;
          readonly score: number | null;
        }>;
        readonly documentRetrievalMetrics: ReadonlyArray<{
          readonly evaluationName: string;
          readonly hit: number | null;
          readonly ndcg: number | null;
          readonly precision: number | null;
        }>;
        readonly events: ReadonlyArray<{
          readonly message: string;
          readonly name: string;
          readonly timestamp: string;
        }>;
        readonly input: {
          readonly mimeType: MimeType;
          readonly value: string;
        } | null;
        readonly latencyMs: number | null;
        readonly name: string;
        readonly output: {
          readonly mimeType: MimeType;
          readonly value: string;
        } | null;
        readonly parentId: string | null;
        readonly spanEvaluations: ReadonlyArray<{
          readonly label: string | null;
          readonly name: string;
          readonly score: number | null;
        }>;
        readonly spanKind: SpanKind;
        readonly startTime: string;
        readonly statusCode: SpanStatusCode;
        readonly statusMessage: string;
        readonly tokenCountCompletion: number | null;
        readonly tokenCountPrompt: number | null;
        readonly tokenCountTotal: number | null;
        readonly " $fragmentSpreads": FragmentRefs<"SpanEvaluationsTable_evals">;
      };
    }>;
  };
};
export type TracePageQuery = {
  response: TracePageQuery$data;
  variables: TracePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "traceId"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "sort",
    "value": {
      "col": "startTime",
      "dir": "asc"
    }
  },
  {
    "items": [
      {
        "kind": "Variable",
        "name": "traceIds.0",
        "variableName": "traceId"
      }
    ],
    "kind": "ListValue",
    "name": "traceIds"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "SpanContext",
  "kind": "LinkedField",
  "name": "context",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "spanId",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "spanKind",
  "storageKey": null
},
v5 = {
  "alias": "statusCode",
  "args": null,
  "kind": "ScalarField",
  "name": "propagatedStatusCode",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "statusMessage",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startTime",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "parentId",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "latencyMs",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tokenCountTotal",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tokenCountPrompt",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tokenCountCompletion",
  "storageKey": null
},
v13 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "value",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "mimeType",
    "storageKey": null
  }
],
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "SpanIOValue",
  "kind": "LinkedField",
  "name": "input",
  "plural": false,
  "selections": (v13/*: any*/),
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "SpanIOValue",
  "kind": "LinkedField",
  "name": "output",
  "plural": false,
  "selections": (v13/*: any*/),
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "attributes",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "concreteType": "SpanEvent",
  "kind": "LinkedField",
  "name": "events",
  "plural": true,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "timestamp",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "score",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "concreteType": "DocumentRetrievalMetrics",
  "kind": "LinkedField",
  "name": "documentRetrievalMetrics",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "evaluationName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "ndcg",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "precision",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hit",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "explanation",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "concreteType": "DocumentEvaluation",
  "kind": "LinkedField",
  "name": "documentEvaluations",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "documentPosition",
      "storageKey": null
    },
    (v3/*: any*/),
    (v18/*: any*/),
    (v19/*: any*/),
    (v21/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TracePageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SpanConnection",
        "kind": "LinkedField",
        "name": "spans",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SpanEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": "span",
                "args": null,
                "concreteType": "Span",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SpanEvaluation",
                    "kind": "LinkedField",
                    "name": "spanEvaluations",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v20/*: any*/),
                  (v22/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "SpanEvaluationsTable_evals"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TracePageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SpanConnection",
        "kind": "LinkedField",
        "name": "spans",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SpanEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": "span",
                "args": null,
                "concreteType": "Span",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SpanEvaluation",
                    "kind": "LinkedField",
                    "name": "spanEvaluations",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/),
                      (v21/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v20/*: any*/),
                  (v22/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "541fad090e2688e7ee2fe393ec052176",
    "id": null,
    "metadata": {},
    "name": "TracePageQuery",
    "operationKind": "query",
    "text": "query TracePageQuery(\n  $traceId: ID!\n) {\n  spans(traceIds: [$traceId], sort: {col: startTime, dir: asc}) {\n    edges {\n      span: node {\n        context {\n          spanId\n        }\n        name\n        spanKind\n        statusCode: propagatedStatusCode\n        statusMessage\n        startTime\n        parentId\n        latencyMs\n        tokenCountTotal\n        tokenCountPrompt\n        tokenCountCompletion\n        input {\n          value\n          mimeType\n        }\n        output {\n          value\n          mimeType\n        }\n        attributes\n        events {\n          name\n          message\n          timestamp\n        }\n        spanEvaluations {\n          name\n          label\n          score\n        }\n        documentRetrievalMetrics {\n          evaluationName\n          ndcg\n          precision\n          hit\n        }\n        documentEvaluations {\n          documentPosition\n          name\n          label\n          score\n          explanation\n        }\n        ...SpanEvaluationsTable_evals\n      }\n    }\n  }\n}\n\nfragment SpanEvaluationsTable_evals on Span {\n  spanEvaluations {\n    name\n    label\n    score\n    explanation\n  }\n}\n"
  }
};
})();

(node as any).hash = "66e40643e804cd983ac710ef000fc80a";

export default node;
