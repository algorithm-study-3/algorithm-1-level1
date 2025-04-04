import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    static int R, C;
    static char[][] grid;
    static boolean[][] visited;
    static int totalSheep = 0, totalWolves = 0;
    static int[] dr = {-1, 1, 0, 0};
    static int[] dc = {0, 0, -1, 1};

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] rc = br.readLine().split(" ");
        R = Integer.parseInt(rc[0]);
        C = Integer.parseInt(rc[1]);
        grid = new char[R][C];
        visited = new boolean[R][C];
        for (int i = 0; i < R; i++) {
            grid[i] = br.readLine().toCharArray();
        }
        for (int i = 0; i < R; i++) {
            for (int j = 0; j < C; j++) {
                if (!visited[i][j] && grid[i][j] != '#') {
                    Region region = new Region();
                    dfs(i, j, region);
                    if (!region.open) {
                        if (region.sheep > region.wolves) totalSheep += region.sheep;
                        else totalWolves += region.wolves;
                    }
                }
            }
        }
        System.out.println(totalSheep + " " + totalWolves);
    }

    static void dfs(int r, int c, Region region) {
        visited[r][c] = true;
        if (r == 0 || r == R - 1 || c == 0 || c == C - 1) region.open = true;
        if (grid[r][c] == 'k') region.sheep += 1;
        if (grid[r][c] == 'v') region.wolves += 1;
        for (int d = 0; d < 4; d++) {
            int nr = r + dr[d], nc = c + dc[d];
            if (nr >= 0 && nr < R && nc >= 0 && nc < C && !visited[nr][nc] && grid[nr][nc] != '#') {
                dfs(nr, nc, region);
            }
        }
    }

    static class Region {
        int sheep = 0, wolves = 0;
        boolean open = false;
    }
}