### what is this?

this is an attempt to wrangle and normalize focus behaviour across different browsers (chrome, safari, firefox) and platforms (macos, ios, android, linux, windows, etc.)

### why you gotta make things so complicated?

because a need exist to consistently deliver a world-class user experience regardless of environment means many pains must be taken to squeeze out those final details which make the difference between excellent and not bad

### whats the problem, we got specs for this

we do, and they do a great job of accounting for and prioritizing accesibility. however as detailed as the specs may appear, they turn out to be rather open-ended, meaning browser vendors are left to fill in the gaps as they see fit. these third-party decisions made on behavior and implementation can have surprising effects that are not apparent. this is problematic for ambitous developers who target browsers expecting a normalized environment for building out their desired experience

it's also important to acknowledge that browsers have a whole lot of responsibility heaved onto them and are required to support the gamut of functionality from basic content delivery to full-featured web apps. this means the specs which browsers are based on are at times overly opioninated for those looking to implement an improved experience

an example being focus management:

for instance if we're looking to deliver some static content that requires html and css without the need for javascript then the browser needs to be able to provide accessible navigation to the user such as tabbing and the like. this is why is makes sense for the browser to provide accessible navigation

problems beging to reveal themselves once steps are taken towards more complex behavior. let's say we want ot implement a modal/popover component that contains a list of selectable items and within each of those items is a nested button for performing an action on that item. additionally, there is also a button at the end of the list that performs an action on the list as a whole. all of the sudden we have ourselves a non-trivial use-case that is not handled by the spec. 

so what do we do? well for starters we try to play nice with the environment and let the browser do the heavy lifting. meaning we let the default navigation do its thing and patch on custom functionality as needed. in our case this looks like a keydown handler on the element containing the list which enables up/down arrow navigation of the list items. now the items in this example are not tabbable themselves yet the action button contained within is, but only if the item itself is focused. so how do we enable this kind of nuanced navigation behavior. well if you are using some declarative rendering framework like react then most likely you would use a piece of state that tells us if the item is focused or not from which the tabIndex value of the nested button can be derived from. in the simplest of user interaction paths this approach can holdup but the focus mechanism managed by the browser is a fickle beast and the focused list item state can and will likely fall out of sync from what the browser perceives to be focused. so now we find ourselves in a very unfortunate situation that tends to only get more difficult to manage as topical fixes get rolled out only for more subtle variants of the same bug to emerge. what this ends up looking like is a whole heap of conditional event handlers applied all over the app from window to nested button trying trying to remedy the situation by preventing the default behavior, stopping event propagation, manual forcing focus, and so on and so forth. this is a losing strategy

the problem here being the attempt to juggle the undercurrent of implicit browser focus management and the explicit additions needed for more fine-grained behavior. even if one developer can manage to pull off this juggling act they are bound to fail in the long run as new or shared functionality emerges

so what are our options? can we hoist focus managment up in way that can be done with confidence and allow us to deploy apps with rich and robust navigation? whats the ceiling for flexible navigation? 

lets find out!

### known anomalies and bugz