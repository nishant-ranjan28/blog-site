---
title: Ruby - Object-oriented programming
date: "2020-06-17T22:12:03.284Z"
description: ""
tags: ['2020', 'ruby', 'oops', 'Abstraction', 'Polymorphism', 'Encapsulation', 'Inheritance']
disqus: true
---

Object-oriented programming (OOP) is a programming paradigm that uses objects and their interactions to design applications and computer programs.

![](https://miro.medium.com/max/1420/1*9hd_8qR0CMZ8L0pVbFLjDw.png)

The basic programming concepts in OOP are:
* **Abstraction**
* **Polymorphism**
* **Encapsulation**
* **Inheritance**

### Abstraction
Ruby exhibits Abstraction by allowing us to form mental models of problems using familiar ‘real-world’ concepts, which allows us to abstract the problem to a more familiar domain. It puts the emphasis of the programming language on human needs over machine needs. We concern ourselves with a higher-level sense of the problem without worrying about implementation details like binary code or whether the code will run on a specific operating system. This allows us to restrict our focus to objects with properties (states) and behaviours (methods).

### Encapsulation
Encapsulation is the deliberate erection of boundaries in code that prevents erroneous accessing and modifying of states and behaviours that don’t make sense for what our intention is.

If for example, we create a CityPark class to form a blueprint of properties and behaviours that we expect out of a CityPark object, we expect that there may be a relation in terms of behaviours with a Forest class, but we don’t want their particular attributes to overlap.

Let's explore more this example.

We would expect both a Park object and a Forest object to contain tree attributes, but the specifics should be unique to the particular object. In other words, that information should be encapsulated within that specific instance of the class. If we try to retrieve the information regarding the number of trees in a specific park, we don’t want to return the value of the number of trees in some forest. The state of each object is said to be unique, because it’s bound to a specific object. We can therefore create multiple CityPark objects and expect to have the ability to retrieve information about each specific park individually.

```
1 #city_park.rb
2
3 class CityPark
4  attr_reader :name, :num_trees
5
6   def initialize(name, num_trees) 
7     @name = name
8     @num_trees = num_trees
9   end
10 end
11
12  class Forest
13  attr_reader :name, :num_trees
14  
15      def initialize(name, num_trees) 
16          @name = name
17          @num_trees = num_trees
18       end
19    end
20
21  high_park = CityPark.new("High Park", 5000)
22  durham_forest = Forest.new("Durham Forest", 125000)
23  dufferin_park = CityPark.new("Dufferin Park", 2000)
24
25  high_park.name # => "High Park"
26  high_park.num_trees # => 5000
27  durham_forest.name # => "Durham Forest" 
28  durham_forest.num_trees # => 125000
29  dufferin_park.num_trees # => 2000
```

#### Access Modifiers
* **Public**
* **Private**
* **Protected**

Encapsulation is at work in many other ways in Ruby, and classifying methods as either public, private, or protected is another example. public methods are the interface that we use to interact with an instance of the class (they can be invoked outside of the class — as we do on lines 25–29). private methods have a much more restricted scope, and are only invokable from within a class, and without an explicit receiver. Private methods are for implementation details that don’t need to be accessed outside of the class, or to deliberately hide information. Think about how you might want to restrict access to sensitive information like a bank account balance, while allowing another method within the class to check if that balance has enough money to withdraw. protected methods are a sort of compromise and behave like public methods when accessed inside a class definition, but behave like private methods when accessed outside.

### Polymorphism
Polymorphism is the ability for data to be represented as many different types. "Poly" stands for "many" and "morph" stands for "forms". OOP gives us flexibility in using pre-written code for new purposes.

### Inheritance

Remember that other pillar of OOP? Inheritance is the ability of related classes to share behaviours through a hierarchical structure of single inheritance. Subclasses inherit the methods from their parent classes (which includes the methods that it inherits through its parent class and so on so forth up the chain). It’s called single inheritance because a given class can only ever directly subclass from one parent class. In our example, we can re-imagine our class relationships by creating a superclass that we’ll call GreenSpace. By subclassing the CityPark and Forest classes from this shared ancestor GreenSpace, both of those subclasses will inherit the behaviours and attribute domains of the GreenSpace class (the < symbol on lines 12 and 14 denote a subclass relationship). So many characters saved, what relief! Seriously though, efficiency is wonderful.

Example:

```
1 # greenspace.rb
2
3   class GreenSpace
4   attr_reader :name, :num_trees
5  
6     def initialize(name, num_trees) 
7     @name = name
8     @num_trees = num_trees
9    end
10 end
11
12  class CityPark < GreenSpace; end
13
14  class Forest < GreenSpace; end
15
16  high_park = CityPark.new("High Park", 5000)
17  durham_forest = Forest.new("Durham Forest", 125000)
18  dufferin_park = CityPark.new("Dufferin Park", 2000)
19
20  high_park.name # => "High Park"
21  high_park.num_trees # => 5000
22  durham_forest.name # => "Durham Forest" 
23  durham_forest.num_trees # => 125000
24  dufferin_park.num_trees # => 2000
```

Now, when we create a new CityPark object on line 16, there is no initialize constructor method within the CityPark class, so the Ruby interpreter will go through the method lookup path in search of an initialize method (as a constructor method, the initialize method is called automatically upon instantiation of a new object of the class). The exact method lookup path for a particular calling object can be found by invoking the ancestors class method on the class of the calling object (it will return an array, which is the names of the classes and modules that will be searched (in order) for the method being invoked). Ruby will stop looking and invoke the first method that it finds by the name provided.

Class methods are methods that are invoked on class itself, rather than on an object of the class. They do not have scope to the individual attributes of objects of the class, they’re focused on functionality that is more general to the class (such as finding out the method lookup path for any object within the class, which doesn’t concern itself with any specific instance).