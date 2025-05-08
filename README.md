# What are some differences between interfaces and types in TypeScript?

# টাইপস্ক্রিপ্টে পারদর্শিতা: `interface` বনাম `type` এবং `keyof` কীওয়ার্ডের জাদু

টাইপস্ক্রিপ্ট (TypeScript) বর্তমানে জাভাস্ক্রিপ্টের জন্য সবচেয়ে জনপ্রিয় স্ট্যাটিক টাইপিং টুলগুলোর একটি। এটি কোডকে আরও নির্ভরযোগ্য ও মেইনটেইনযোগ্য করে তোলে।

### মৌলিক ব্যবহার:

Interface: সাধারণত object এর structure বা আকার নির্ধারণ করতে ব্যবহৃত হয়।

Type alias: যেকোনো ধরণের টাইপ (object, union, primitive ইত্যাদি) সংজ্ঞায়িত করতে পারে।

Example:

```
interface Person {
  name: string;
  age: number;
}

type PersonType = {
  name: string;
  age: number;
};

```

### Extension

Interface extends ব্যবহার করে একাধিক interface থেকে inherit করতে পারে।

Type & (intersection) ব্যবহার করে একাধিক টাইপ মিলিয়ে নতুন টাইপ তৈরি করে।

#### Example

```
interface Employee extends Person {
  salary: number;
}

type EmployeeType = PersonType & {
  salary: number;
};
```

#### Declaration merging

Interface বারবার ঘোষণা করে একই নামের interface এ নতুন properties যোগ করা যায়।

Type alias এ এই সুবিধা নেই — একবার type তৈরি হলে সেটিকে আবার redefine করা যায় না।

#### Example

interface Dog {
breed: string;
}

interface Dog {
age: number;
}

// Final Dog = { breed: string; age: number }

#### Use cases:

Interface বেশি ব্যবহার হয় public API বা library design করার সময়।

Type বেশি ফ্লেক্সিবল, complex টাইপ, union, tuple, function signature ইত্যাদি define করতে ভালো।

---

# What is the use of the keyof keyword in TypeScript? Provide an example.

Answer:
keyof হল TypeScript-এর একটি বিশেষ কিওয়ার্ড, যেটা দিয়ে আপনি একটি অবজেক্ট টাইপের সব কী (key) গুলোর type বের করতে পারেন।

সোজা ভাষায় বললে,
keyof দিয়ে আপনি বলতে পারেন — “এই অবজেক্টে কী কী নাম আছে?”
এবং TypeScript সেই নামগুলোকে একটা টাইপ হিসেবে রিটার্ন করে।

উদাহরণের মাধ্যমে বুঝি:
ধরি, আমাদের একটা টাইপ আছে:

```
type Person = {
  name: string;
  age: number;
}
```

এখন যদি আমরা লিখি:

```
type PersonKeys = keyof Person;

```

তাহলে PersonKeys টাইপ হবে:

```
"name" | "age"

```

মানে, Person টাইপে name আর age নামে দুইটা প্রপার্টি আছে,
তাই keyof Person মানে এই দুইটার যেকোনো একটা — "name" অথবা "age"।

```function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

এই ফাংশনটা যেকোনো অবজেক্ট থেকে টাইপ সেফ ভাবে প্রপার্টি বের করতে সাহায্য করে।
এখানে K extends keyof T মানে K কেবলমাত্র সেই কী গুলোর মধ্যে হতে পারবে, যেগুলো T টাইপে আছে।

### সংক্ষেপে:

keyof একটা টাইপ অপারেটর

এটা কোন অবজেক্ট টাইপের সব কী নাম বের করে

এটি টাইপ সেফ কোড লেখায় অনেক সাহায্য করে
