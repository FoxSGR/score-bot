import { CommandMessage } from '@typeit/discord';

export function argsMatch(cmd: CommandMessage, regExp: RegExp): boolean {
  const content = cmd.commandContent.replace(/\s\s+/g, ' '); // replace multiple spaces with single

  const firstSpace = content.indexOf(' ');
  if (firstSpace === -1) {
    return regExp.test('');
  }

  return regExp.test(content.substring(firstSpace + 1));
}
