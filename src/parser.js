function parse(char, state, stack) {
  let stackState = stack[stack.length - 1].state;

  switch (stackState) {

  }
}

const stackCallbacks = {
  "VALUE": valueParse
}

const valueParse = (char, state, stack) {
  switch(char) {
    case STRING_START:
      stackPush(STRING);
    case FRACTION_START:
      stackPush(FRACTION);
    case INTEGER_START:
      stackPush(INTEGER);
    case TRUE_START:
      stackPush(TRUE);
    case FALSE_START:
      stackPush(FALSE);
    case NULL_START:
      stackPush(NULL);
    case OBJECT_START:
      stackPush(OBJECT);
    case ARRAY_START:
      stackPush(ARRAY);
    default:
      ERROR
  }
}

const stackPop = () => {

}

const stackReplace = (NEXT) => {
  stack.pop()
  stack.push(NEXT)
} 

const stackPush = (STATE) => {
  stack.push(STATE, currentPos)
}
