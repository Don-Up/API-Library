## [HARD React Interview Questions (3 patterns)](https://www.youtube.com/watch?v=Zpvzv8Uma8Q)

okay today we're talking about advanced react interview questions and more specifically component design so I've got three patterns that I would ask anybody if I really wanted to **get to the bottom of**(弄清) whether or not they really knew their stuff as it **pertains to**(与...相关) advanced react.

> 好，今天我们来谈谈高级 React 面试问题，特别是组件设计。我准备了三个模式问题，如果我想深入了解某人是否真正掌握了与高级 React 相关的知识，我会问这些问题。



before we get into things I just want to set the context a little bit so interview processes can look different at different companies.

> 在开始之前，我想先介绍一下背景，因为不同公司有不同的面试流程。



I've talked about this in the past and usually you **start out with**(以...开始) a **phone screen**(电话筛选) or you might start out with a **technical screen**   (技术筛选) but usually there's some kind of conversational or **live component**(实时测试) to interviews.

> 我之前提到过，通常面试会从电话筛选或技术筛选开始，但通常都会涉及某种对话或实时测试环节。



and that may or may not involve live coding and in my mind this is not going to be a live coding kind of thing this is going to be more of a conversational kind of thing.

> 这可能包括也可能不包括现场编码。在我看来，这不会是现场编码的面试，而是更偏向于对话的形式。



which is the type of interview that I've always done I've always been a little bit more **light on** the live coding piece.

> 这也是我一直以来采用的面试形式，我对现场编码的部分要求一直较低。



I feel like you can get to the bottom of somebody's understanding just as well by discussing things and so these are those kinds of questions.

> 我觉得通过讨论也能很好地了解某人的理解程度，所以这些是那种类型的问题。



so with that said if I were really trying to **probe**(探究) the depths of someone's understanding of react the first component design question I would ask is what is a higher order component.

> 如果我真的想深入了解某人对 React 的理解，我会问的第一个组件设计问题是：什么是高阶组件？



so a higher order component also called the hoc is basically a way of reusing code.

> 高阶组件（也叫 HOC）基本上是一种重用代码的方式。



and a **spoiler**(剧透) is that all of the patterns I'm going to discuss make your code more clean more efficient more modular and more reusable.

> 提前剧透一下，我将讨论的所有模式都会使你的代码更简洁、更高效、更模块化以及更可重用。



so higher order components are just one way of doing that and of sharing code.

> 高阶组件只是实现这一点以及共享代码的一种方法。



so the idea behind a higher order component is it takes another component as an input and returns it as kind of a wrapped version of itself.

> 高阶组件的核心思想是，它将另一个组件作为输入，并将其作为自身的某种包装版本返回。



and so essentially what you're doing is in the parent component the higher order component you're able to share properties and methods to whatever component is passed in.

> 所以，本质上你是在父组件（高阶组件）中共享属性和方法给传入的任何组件。



so let's say you have I don't know an api call or something and you have to make that call **a bunch of places**.

> 假设你有一个 API 调用或者其他东西，并且你需要在很多地方使用它。



instead of writing it in every single place what you could do is write it as part of a higher order component pass whatever component in that you want to use and then you get it back and you're able to use that method there on the child component.

> 与其在每个地方都写一遍，你可以将其作为高阶组件的一部分，传入你想使用的任何组件，然后返回它，并且可以在子组件中使用该方法。



that's kind of a **silly**(愚蠢的 => 简单的) example but you see this in the real world **all over the place** if you do react in any **substantial**(实质性的, 大量的) way.

> 这是一个有点简单的例子，但如果你在实际工作中使用 React，这种模式随处可见。



so probably the classic example is with react router the function withRouter is a higher order component.

> 一个经典的例子可能是 React Router，其中的 `withRouter` 函数就是一个高阶组件。



you're passing your component in and then when it comes back you get history and match and location and those are all things that come from the higher order component.

> 你传入一个组件，返回后，你会获得 `history`、`match` 和 `location`，这些都来自高阶组件。



another thing you'll notice about higher order components is they typically start with the keyword with now this isn't required but it is kind of an accepted standard.

> 另一个你会注意到的关于高阶组件的事情是，它们通常以 `with` 这个关键词开头，虽然这不是必须的，但已经成为一种公认的标准。



so for example withRouter like I mentioned or whatever else it happens to be you would start it with the keyword with and that would be something good to mention in an interview.

> 比如我提到的 `withRouter` 或其他类似的东西，你会以 `with` 开头，这一点在面试中提到会很加分。



okay so that's higher order components the next pattern that I would ask about in an advanced react interview is render props.

> 好的，这就是高阶组件。接下来我会在高级 React 面试中询问的模式是 Render Props。



okay so the kind of standard definition of what is a render prop is that a render prop is a function that a component receives as a prop that it uses to know what to render.

> Render Prop 的标准定义是：Render Prop 是一个函数，作为属性传递给组件，用于告诉组件需要渲染什么内容。



so often the prop is just called render and then it's used in the component that receives it in the render function.

> 这个属性通常直接叫 `render`，然后在接收该属性的组件的 `render` 函数中使用。



so it would be for example this.props.render inside of the render function.

> 比如，在 `render` 函数中使用 `this.props.render`。



and this function prop makes it possible to share behavior between the component that is receiving that prop and any other component that needs to either share behavior or state.

> 这个函数属性让接收该属性的组件与需要共享行为或状态的其他组件之间能够共享行为。



so it's a little bit more challenging **verbally**(口头上地, 用言辞地) I think it's easier to **see**(理解) written in code.

> 用语言描述可能稍微有点难理解，我认为用代码展示会更容易理解。



but there's actually some great examples in the react documentation if you want to study up on this.

> 但实际上在 React 文档中有一些很棒的示例，如果你想深入学习这一点，可以参考文档。



I'll pop an example up here it basically is an example where a component called Mouse and a component called Cat are trying to share the same state about where the mouse is on the screen.

> 我这里举个例子，基本上是一个名为 `Mouse` 的组件和一个名为 `Cat` 的组件，它们试图共享关于鼠标在屏幕上的位置的相同状态。



and so you can see it's a fairly elegant way of passing this information between two components that happen to be in the same component tree.

> 所以你可以看到，这是一种在同一个组件树中的两个组件之间传递信息的相当优雅的方式。



I feel like I should say here these are good things not just to know about but to actually use in your real-life code.

> 我觉得我应该说，这些模式不仅仅是要了解的东西，更是应该在实际代码中使用的东西。



I find that one of the best ways to learn is by doing and the more that you use these patterns you'll not only **get**(会) good at using them but you'll get better at explaining them too.

> 我发现学习的最佳方法之一是实践。你越多地使用这些模式，不仅会更擅长使用它们，还会更擅长解释它们。



and so I would just encourage you not only to learn things for the interview but actually for real life.

> 所以我鼓励你不仅仅为了面试去学习这些东西，还要为了实际应用去学习。



with that said if someone could give me a really **solid**(扎实的) definition an example for render props I would probably be impressed and more confident that they knew what they were doing.

> 话虽如此，如果有人能给出一个非常扎实的 Render Props 定义和示例，我可能会对他们的能力印象深刻，并更有信心相信他们知道自己在做什么。



okay so that's render props the third pattern I would ask about is how to write a custom hook.

> 好的，这就是 Render Props。我要问的第三种模式是如何编写自定义 Hook。



now as I mentioned the point of all these patterns is to share code and reuse it and make things more clean and modular and custom hooks are no different.

> 正如我提到的，这些模式的重点都是共享代码和复用代码，使代码更简洁模块化，自定义 Hook 也不例外。



so you use a custom hook whenever you want to share logic between two functional components in react.

> 每当你想在两个 React 函数组件之间共享逻辑时，就可以使用自定义 Hook。



so you take that functionality your logic and you can just extract it into your own custom hook if you want to use it between two functional components.

> 你可以将这些功能或逻辑提取到你自定义的 Hook 中，如果你想在两个函数组件之间使用它。



the interesting thing here is that components are functions hooks are also functions and so this is just yet another function that you're writing in order to make things a little bit more reusable.

> 有趣的是，组件是函数，Hook 也是函数，而自定义 Hook 只是你编写的另一个函数，用于让逻辑更可复用。



so since this custom hook is just a function you can go write that **wherever you please**(随意) and actually return whatever you want as well.

> 因为自定义 Hook 只是一个函数，你可以随意编写它，并且可以返回任何你想要的东西。



one of the only conventions is to use the keyword use in front of whatever the hook is called.

> 唯一的约定之一是，在 Hook 的名称前加上 `use` 这个关键词。



so it would be use your custom hook name but that's pretty much it.

> 比如 `useYourCustomHookName`，但这基本上就是全部了。



if your custom hook has a setter and not just a getter then something I like to do is kind of to follow the hooks convention of returning the value and the function to update the value in an array.

> 如果你的自定义 Hook 有一个 Setter 而不仅仅是 Getter，那我喜欢做的一件事是遵循 Hook 的约定，在返回值中返回一个数组，其中包含值和更新值的函数。



and that way it kind of keeps everybody using the same patterns that react has established and I think that's pretty cool.

> 这样一来，大家都可以遵循 React 已经建立的相同模式，我觉得这很棒。



but you also can just return one value if it's simply a getter.

> 但如果只是一个 Getter，你也可以只返回一个值。



I think it's important to mention here and also it could be kind of impressive to mention in an interview that two components using the same hook don't share state.

> 我认为有必要在这里提到，也可以在面试中提到一个重要点：使用相同 Hook 的两个组件不会共享状态。



hooks are really just a way to reuse stateful logic according to the react documentation and so keeping that in mind could really **influence**(影响[动]) how you answer this question and also how you write your components.

> 根据 React 文档，Hook 只是复用有状态逻辑的一种方式，记住这一点可以影响你回答这个问题的方式，以及你编写组件的方式。



okay so those are three advanced react interview questions on component design.

> 好的，这就是关于组件设计的三个高级 React 面试问题。



I will put links below to react documentation and other resources that I find helpful in learning these concepts.

> 我会在下面放上 React 文档和其他我认为对学习这些概念有帮助的资源链接。



I hope you found this helpful if you did then you'd probably like the rest of my channel which focuses on software engineering and career development so please feel free to subscribe.

> 希望你觉得这有帮助。如果是的话，你可能也会喜欢我频道的其他内容，主要关注软件工程和职业发展，所以请随意订阅。



regardless thanks so much for watching to the end and I'll see you in the next one.

> 不管怎样，非常感谢你看到最后，我们下期再见。
