# What are some differences between interfaces and types in TypeScript?

# টাইপস্ক্রিপ্টে পারদর্শিতা: `interface` বনাম `type` এবং `keyof` কীওয়ার্ডের জাদু

TypeScript কে JavaScipt এর superset বলা হয়। TypeScript হলো compile runtime টাইপস্ক্রিপ্ট (TypeScript) বর্তমানে জাভাস্ক্রিপ্টের জন্য সবচেয়ে জনপ্রিয় স্ট্যাটিক টাইপিং টুলগুলোর একটি। এটি কোডকে আরও নির্ভরযোগ্য ও মেইনটেইনযোগ্য করে তোলে। তবে টাইপস্ক্রিপ্ট শেখার পথে কিছু বিষয় নতুনদের কাছে একটু জটিল মনে হতে পারে।

- `interface` ও `type` এর মধ্যে পার্থক্য
- `keyof` কীওয়ার্ড কীভাবে কাজ করে এবং কিভাবে ব্যবহার করবেন

---

## `interface` বনাম `type`: পার্থক্য কী?

প্রথম দেখায় মনে হতে পারে `interface` ও `type` একই কাজ করে — মানে একটি অবজেক্টের গঠন নির্ধারণ। তবে ভিতরে ভিতরে এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

### `interface` – অবজেক্টের গঠন নির্ধারণের জন্য আদর্শ

```
interface User {
  id: number;
  name: string;
  email?: string;
}
```

### type Primitive এর জন্য আদর্শ

```
type User = {
  id: number;
  name: string;
  email?: string;
};
```
