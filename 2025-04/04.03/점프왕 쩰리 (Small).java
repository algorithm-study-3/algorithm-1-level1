import java.io.*;
import java.util.*;

public class Main {
    static int N;
    static int[][] board;
    static boolean[][] visited;
    static boolean found = false;
    
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        board = new int[N][N];
        visited = new boolean[N][N];
        
        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            for (int j = 0; j < N; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        
        dfs(0, 0);
        
        System.out.println(found ? "HaruHaru" : "Hing");
    }
    
    public static void dfs(int i, int j) {
        if (i < 0 || i >= N || j < 0 || j >= N || visited[i][j])
            return;
        
        visited[i][j] = true;
        
        if (board[i][j] == -1) {
            found = true;
            return;
        }
        
        int jump = board[i][j];
        
        if (jump == 0) return;
        
        dfs(i, j + jump);
        dfs(i + jump, j);
    }
}