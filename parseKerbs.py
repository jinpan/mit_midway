from collections import defaultdict
from json import dumps
from md5 import md5

if __name__ == '__main__':
    hashes = {chr(idx): defaultdict(list)
              for idx in range(ord('a'), ord('z')+1)}

    with open('kerbs.txt') as f:
        for line in f.readlines():
            hashes[line[0]][line[1]].append(md5(line.strip()).hexdigest())

    with open('kerb_hashes.js', 'w') as f:
        f.write('var kerberos_hashes = %s;' % dumps(hashes, indent=4))


