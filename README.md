## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: এটি সব থেকে Fast। যদি প্রত্যেকটা পেজে একটি মাত্র ইউনিক ID থাকে এবং সিঙ্গেল এলিমেন্ট ধরতে হয়, তবে এটি ব্যবহার করা বেস্ট।
getElementsByClassName: এই মেথড দিয়ে অনেকগুলো আইটেম বা এলিমেন্ট নিয়ে একসাথে কাজ করা যায়।
querySelector: এটি সর্বপ্রথম যে এলিমেন্টটি পায় সেটিকে Return করে। এতে ID, Class, Tag সবকিছু ব্যবহার করা যায়। আইডির ক্ষেত্রে # এবং ক্লাসের ক্ষেত্রে . ব্যবহার করতে হয়।

### 2. How do you create and insert a new element into the DOM?

Create: এর মানে হলো JavaScript দিয়ে HTML ফাইলের যেকোনো কিছু বা নতুন কোনো এলিমেন্ট তৈরি করা।
Insert: তৈরি করা নতুন এলিমেন্টটিকে HTML ফাইলের ভেতরে বা নির্দিষ্ট জায়গায় বসিয়ে দেওয়া।

### 3. What is Event Bubbling? And how does it work?

যখন কোনো একটি Button-এ ক্লিক করা হয়, তখন প্রথমে একটি Event ঘটে। এরপর ইভেন্টটি তার Parent এলিমেন্টে যায়, তারপর তার উপরের Parent-এ যায়। এভাবে পর্যায়ক্রমে Body থেকে শুরু করে Document পর্যন্ত পৌঁছে যায়। অর্থাৎ যেখানে ক্লিক করা হয় সেখান থেকে উপরের দিকে ইভেন্টটি ছড়িয়ে পড়াকেই Event Bubbling বলা হয়।

### 4. What is Event Delegation in JavaScript? Why is it useful?

যখন কোনো একটি Button-এ ক্লিক করা হয়, তখন প্রথমে একটি Event ঘটে। এরপর ইভেন্টটি তার Parent এলিমেন্টে যায়, তারপর তার উপরের Parent-এ যায়। এভাবে পর্যায়ক্রমে Body থেকে শুরু করে Document পর্যন্ত পৌঁছে যায়। অর্থাৎ যেখানে ক্লিক করা হয় সেখান থেকে উপরের দিকে ইভেন্টটি ছড়িয়ে পড়াকেই Event Bubbling বলা হয়।

### 5. What is the difference between preventDefault() and stopPropagation() methods?

মনে করুন আপনার এখানে ১০টি Card আছে। এখন প্রত্যেকটি কার্ডে আলাদা করে Event না দিয়ে যদি মেইন কন্টেনারে (Parent Container) একটি Event Listener দেওয়া হয়, তবে ওই একটি লিসেনার দিয়েই সব Child Element-এর ইভেন্ট হ্যান্ডেল করা সম্ভব। এটিই হলো Event Delegation।

## stopPropagation(): এটি মূলত Event Bubbling বন্ধ করতে ব্যবহার করা হয়। এটি ব্যবহার করলে ইভেন্টটি আর তার উপরের দিকে অর্থাৎ প্যারেন্ট এলিমেন্টে পৌঁছাতে পারে না।

preventDefault(): কোনো এলিমেন্টের Default Behaviour বন্ধ করার জন্য এটি ব্যবহার করা হয়। যেমন: কোনো ফর্ম সাবমিট করার সময় পেজ যেন অটোমেটিক Reload না হয়, তখন এটি ব্যবহার করা হয়।
