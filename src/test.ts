import rate_limiter_component_schema from "./component/schema.ts";

type RateLimiterTest_Modules = Record<string, () => Promise<unknown>>;

type RateLimiterTest_Target = {
	registerComponent(name: string, schema: never, modules: RateLimiterTest_Modules): void;
};

const rate_limiter_test_modules = {
	"./convex.config.ts": () => import("./component/convex.config.ts"),
	"./internal.ts": () => import("./component/internal.ts"),
	"./lib.ts": () => import("./component/lib.ts"),
	"./schema.ts": () => import("./component/schema.ts"),
	"./time.ts": () => import("./component/time.ts"),
	"./_generated/api.ts": () => import("./component/_generated/api.ts"),
	"./_generated/component.ts": () => import("./component/_generated/component.ts"),
	"./_generated/dataModel.ts": () => import("./component/_generated/dataModel.ts"),
	"./_generated/server.ts": () => import("./component/_generated/server.ts"),
} satisfies RateLimiterTest_Modules;

const rate_limiter_test = {
	schema: rate_limiter_component_schema,
	modules: rate_limiter_test_modules,
	register(t: RateLimiterTest_Target, name: string = "rateLimiter") {
		t.registerComponent(name, rate_limiter_component_schema as never, rate_limiter_test_modules);
	},
};

export default rate_limiter_test;
