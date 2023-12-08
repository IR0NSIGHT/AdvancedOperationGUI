import java.lang.Integer.parseInt

fun main(args: Array<String>) {
    println("Hello World!")

    // Try adding program arguments via Run/Debug configuration.
    // Learn more about running applications: https://www.jetbrains.com/help/idea/running-applications.html.
    println("Program arguments: ${args.joinToString()}")
    for (s in args) {
        println(handleThing(s))
    }
}

fun toPrettyString(strings: Array<String>): String {
    return if (1 > 0) {
        for (item in strings)
            println(item)
        "hello"
    }
    else "world"
}

val topLevelThings = listOf<String>("a","b","c")

fun handleThing(thing: Any): String =
    when (thing) {
        1 -> "One"
        is Long -> "Two"
        !is String -> "Three"
        else  -> "Minus One"
    }

fun parser(a: String, b: String) throws {
    val c = parseInt(a)
}
