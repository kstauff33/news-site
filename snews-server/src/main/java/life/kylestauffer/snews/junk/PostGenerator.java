package life.kylestauffer.snews.junk;

import life.kylestauffer.snews.auth.ApplicationUserRepository;
import life.kylestauffer.snews.dao.AuthorDatabase;
import life.kylestauffer.snews.dao.ContextUrlDatabase;
import life.kylestauffer.snews.dao.ImageDatabase;
import life.kylestauffer.snews.dao.PostDatabase;
import life.kylestauffer.snews.dao.TagDatabase;
import life.kylestauffer.snews.model.Author;
import life.kylestauffer.snews.model.ContextUrl;
import life.kylestauffer.snews.model.Image;
import life.kylestauffer.snews.model.PostModel;
import life.kylestauffer.snews.model.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Slf4j
@Component
public class PostGenerator {

    private final TagDatabase tagDatabase;

    private final AuthorDatabase authorDatabase;

    private final PostDatabase postDatabase;

    private final ImageDatabase imageDatabase;

    private final PasswordEncoder passwordEncoder;

    private final ApplicationUserRepository applicationUserRepository;

    private final List<Tag> tags = new ArrayList<>();

    private final List<Author> authors = new ArrayList<>();

    private final Random random = new Random();

    @Autowired
    private PostGenerator(TagDatabase tagDatabase, AuthorDatabase authorDatabase, PostDatabase postDatabase,
                          ImageDatabase imageDatabase, ContextUrlDatabase contextUrlDatabase, PasswordEncoder passwordEncoder, ApplicationUserRepository applicationUserRepository) {
        this.tagDatabase = tagDatabase;
        this.authorDatabase = authorDatabase;
        this.postDatabase = postDatabase;
        this.imageDatabase = imageDatabase;
        this.passwordEncoder = passwordEncoder;
        this.applicationUserRepository = applicationUserRepository;
        log.info("########### Generation Initialization ############");
//        generate();
        log.info("########### Generation Completion ############");
    }

    @Transactional
    private void generate() {
        generateTags();
        generateAuthors();
        generatePosts();
    }

    @Transactional
    private void generatePosts() {
        for (Tag tag : tags) {
            Set<Tag> oneTag = new HashSet<>();
            oneTag.add(tag);
            List<PostModel> postModels = new ArrayList<>();
            for (int x = 0; x < 300; x++) {
                PostModel postModel = PostModel
                        .builder()
                        .author(getAnAuthor())
                        .views(0L)
                        .contextUrls(getContext())
                        .image(getAnImage())
                        .tagline(getWords(10))
                        .isPublished(true)
                        .tags(oneTag)
                        .date(Calendar.getInstance())
                        .title(getATitle())
                        .audioUrl(tag.getTag().equals("listen") ?
                                "https://download.realmp3.xyz/d/Rick-Astley-Never-Gonna-Give-You-Up.mp3" : null)
                        .text(getWords(tag.getTag().equals("listen") ? 200 : 999))
                        .build();

                postModel.getContextUrls().forEach(contextUrl -> contextUrl.setPost(postModel));
                postModels.add(postModel);
            }

            postDatabase.saveAll(postModels);
        }
    }

    private Set<ContextUrl> getContext() {
        Set<ContextUrl> contextUrls = new HashSet<>();
        for (int x = 0; x < random.nextInt(5); x++) {
            contextUrls.add(ContextUrl.builder().url("http://google.com").build());
        }
        return contextUrls;
    }

    private String getWords(int length) {
        Collections.shuffle(titleWords);
        return titleWords.stream().limit(length).collect(Collectors.joining(" "));
    }

    private Author getAnAuthor() {
        return authors.get(random.nextInt(authors.size() - 1));
    }

    @Transactional
    private void generateAuthors() {
        authors.addAll(authorDatabase.findAll());
        if (authors.size() < 1) {
            for (int x = 0; x < 50; x++) {
                String aName = getAName();
                authors.add(Author.builder()
                        .name(aName)
                        .image(getAnImage())
                        .build());
            }
            authorDatabase.saveAll(authors);
        }
    }

    private String getAName() {
        Collections.shuffle(authorNames);
        return authorNames.stream().limit(2).collect(Collectors.joining(" "));
    }

    private String getATitle() {
        Collections.shuffle(titleWords);
        return titleWords.stream().limit(5).collect(Collectors.joining(" "));
    }

    private Image getAnImage() {
        return imageDatabase.save(Image
                .builder()
                .altText("A picture")
                .smallUrl("https://picsum.photos/100/100?q=" + random.nextInt())
                .mediumUrl("https://picsum.photos/400/175?q=" + random.nextInt())
                .largeUrl("https://picsum.photos/930/350?q=" + random.nextInt())
                .build());
    }

    private void generateTags() {
        tags.addAll(tagDatabase.findAll());
        if (tags.size() < 1) {
            tags.addAll(tagDatabase.saveAll(Stream.of("news", "opinion", "listen", "analytics")
                    .map(tag -> Tag.builder().tag(tag).build()).collect(Collectors.toList())));
        }
    }

    private final String[] words = {"of", "and", "a", "in", "is", "it", "you", "that", "he", "was", "for", "on", "are", "with", "as", "I", "his", "they", "be", "at", "one", "have", "this", "from", "or", "had", "by", "hot", "word", "but", "what", "some", "we", "can", "out", "other", "were", "all", "there", "when", "up", "use", "your", "how", "said", "an", "each", "she", "which", "do", "their", "time", "if", "will", "way", "about", "many", "then", "them", "write", "would", "like", "so", "these", "her", "long", "make", "thing", "see", "him", "two", "has", "look", "more", "day", "could", "go", "come", "did", "number", "sound", "no", "most", "people", "my", "over", "know", "water", "than", "call", "first", "who", "may", "down", "side", "been", "now", "find", "any", "new", "work", "part", "take", "get", "place", "made", "live", "where", "after", "back", "little", "only", "round", "man", "year", "came", "show", "every", "good", "me", "give", "our", "under", "name", "very", "through", "just", "form", "sentence", "great", "think", "say", "help", "low", "line", "differ", "turn", "cause", "much", "mean", "before", "move", "right", "boy", "old", "too", "same", "tell", "does", "set", "three", "want", "air", "well", "also", "play", "small", "end", "put", "home", "read", "hand", "port", "large", "spell", "add", "even", "land", "here", "must", "big", "high", "such", "follow", "act", "why", "ask", "men", "change", "went", "light", "kind", "off", "need", "house", "picture", "try", "us", "again", "animal", "point", "mother", "world", "near", "build", "self", "earth", "father", "head", "stand", "own", "page", "should", "country", "found", "answer", "school", "grow", "study", "still", "learn", "plant", "cover", "food", "sun", "four", "between", "state", "keep", "eye", "never", "last", "let", "thought", "city", "tree", "cross", "farm", "hard", "start", "might", "story", "saw", "far", "sea", "draw", "left", "late", "run", "press", "close", "night", "real", "life", "few", "north", "open", "seem", "together", "next", "white", "children", "begin", "got", "walk", "example", "ease", "paper", "group", "always", "music", "those", "both", "mark", "often", "letter", "until", "mile", "river", "car", "feet", "care", "second", "book", "carry", "took", "science", "eat", "room", "friend", "began", "idea", "fish", "mountain", "stop", "once", "base", "hear", "horse", "cut", "sure", "watch", "color", "face", "wood", "main", "enough", "plain", "girl", "usual", "young", "ready", "above", "ever", "red", "list", "though", "feel", "talk", "bird", "soon", "body", "dog", "family", "direct", "pose", "leave", "song", "measure", "door", "product", "black", "short", "numeral", "class", "wind", "question", "happen", "complete", "ship", "area", "half", "rock", "order", "fire", "south", "problem", "piece", "told", "knew", "pass", "since", "top", "whole", "king", "space", "heard", "best", "hour", "better", "true", "during", "hundred", "five", "remember", "step", "early", "hold", "west", "ground", "interest", "reach", "fast", "verb", "sing", "listen", "six", "table", "travel", "less", "morning", "ten", "simple", "several", "vowel", "toward", "war", "lay", "against", "pattern", "slow", "center", "love", "person", "money", "serve", "appear", "road", "map", "rain", "rule", "govern", "pull", "cold", "notice", "voice", "unit", "power", "town", "fine", "certain", "fly", "fall", "lead", "cry", "dark", "machine", "note", "wait", "plan", "figure", "star", "box", "noun", "field", "rest", "correct", "able", "pound", "done", "beauty", "drive", "stood", "contain", "front", "teach", "week", "final", "gave", "green", "oh", "quick", "develop", "ocean", "warm", "free", "minute", "strong", "special", "mind", "behind", "clear", "tail", "produce", "fact", "street", "inch", "multiply", "nothing", "course", "stay", "wheel", "full", "force", "blue", "object", "decide", "surface", "deep", "moon", "island", "foot", "system", "busy", "test", "record", "boat", "common", "gold", "possible", "plane", "stead", "dry", "wonder", "laugh", "thousand", "ago", "ran", "check", "game", "shape", "equate", "hot", "miss", "brought", "heat", "snow", "tire", "bring", "yes", "distant", "fill", "east", "paint", "language", "among", "grand", "ball", "yet", "wave", "drop", "heart", "am", "present", "heavy", "dance", "engine", "position", "arm", "wide", "sail", "material", "size", "vary", "settle", "speak", "weight", "general", "ice", "matter", "circle", "pair", "include", "divide", "syllable", "felt", "perhaps", "pick", "sudden", "count", "square", "reason", "length", "represent", "art", "subject", "region", "energy", "hunt", "probable", "bed", "brother", "egg", "ride", "cell", "believe", "fraction", "forest", "sit", "race", "window", "store", "summer", "train", "sleep", "prove", "lone", "leg", "exercise", "wall", "catch", "mount", "wish", "sky", "board", "joy", "winter", "sat", "written", "wild", "instrument", "kept", "glass", "grass", "cow", "job", "edge", "sign", "visit", "past", "soft", "fun", "bright", "gas", "weather", "month", "million", "bear", "finish", "happy", "hope", "flower", "clothe", "strange", "gone", "jump", "baby", "eight", "village", "meet", "root", "buy", "raise", "solve", "metal", "whether", "push", "seven", "paragraph", "third", "shall", "held", "hair", "describe", "cook", "floor", "either", "result", "burn", "hill", "safe", "cat", "century", "consider", "type", "law", "bit", "coast", "copy", "phrase", "silent", "tall", "sand", "soil", "roll", "temperature", "finger", "industry", "value", "fight", "lie", "beat", "excite", "natural", "view", "sense", "ear", "else", "quite", "broke", "case", "middle", "kill", "son", "lake", "moment", "scale", "loud", "spring", "observe", "child", "straight", "consonant", "nation", "dictionary", "milk", "speed", "method", "organ", "pay", "age", "section", "dress", "cloud", "surprise", "quiet", "stone", "tiny", "climb", "cool", "design", "poor", "lot", "experiment", "bottom", "key", "iron", "single", "stick", "flat", "twenty", "skin", "smile", "crease", "hole", "trade", "melody", "trip", "office", "receive", "row", "mouth", "exact", "symbol", "die", "least", "trouble", "shout", "except", "wrote", "seed", "tone", "join", "suggest", "clean", "break", "lady", "yard", "rise", "bad", "blow", "oil", "blood", "touch", "grew", "cent", "mix", "team", "wire", "cost", "lost", "brown", "wear", "garden", "equal", "sent", "choose", "fell", "fit", "flow", "fair", "bank", "collect", "save", "control", "decimal", "gentle", "woman", "captain", "practice", "separate", "difficult", "doctor", "please", "protect", "noon", "whose", "locate", "ring", "character", "insect", "caught", "period", "indicate", "radio", "spoke", "atom", "human", "history", "effect", "electric", "expect", "crop", "modern", "element", "hit", "student", "corner", "party", "supply", "bone", "rail", "imagine", "provide", "agree", "thus", "capital", "chair", "danger", "fruit", "rich", "thick", "soldier", "process", "operate", "guess", "necessary", "sharp", "wing", "create", "neighbor", "wash", "bat", "rather", "crowd", "corn", "compare", "poem", "string", "bell", "depend", "meat", "rub", "tube", "famous", "dollar", "stream", "fear", "sight", "thin", "triangle", "planet", "hurry", "chief", "colony", "clock", "mine", "tie", "enter", "major", "fresh", "search", "send", "yellow", "gun", "allow", "print", "dead", "spot", "desert", "suit", "current", "lift", "rose", "continue", "block", "chart", "hat", "sell", "success", "company", "subtract", "event", "particular", "deal", "swim", "term", "opposite", "wife", "shoe", "shoulder", "spread", "arrange", "camp", "invent", "cotton", "born", "determine", "quart", "nine", "truck", "noise", "level", "chance", "gather", "shop", "stretch", "throw", "shine", "property", "column", "molecule", "select", "wrong", "gray", "repeat", "require", "broad", "prepare", "salt", "nose", "plural", "anger", "claim", "continent", "oxygen", "sugar", "death", "pretty", "skill", "women", "season", "solution", "magnet", "silver", "thank", "branch", "match", "suffix", "especially", "fig", "afraid", "huge", "sister", "steel", "discuss", "forward", "similar", "guide", "experience", "score", "apple", "bought", "led", "pitch", "coat", "mass", "card", "band", "rope", "slip", "win", "dream", "evening", "condition", "feed", "tool", "total", "basic", "smell", "valley", "nor", "double", "seat", "arrive", "master", "track", "parent", "shore", "division", "sheet", "substance", "favor", "connect", "post", "spend", "chord", "fat", "glad", "original", "share", "station", "dad", "bread", "charge", "proper", "bar", "offer", "segment", "slave", "duck", "instant", "market", "degree", "populate", "chick", "dear", "enemy", "reply", "drink", "occur", "support", "speech", "nature", "range", "steam", "motion", "path", "liquid", "log", "meant", "quotient", "teeth", "shell", "neck",};

    private final List<String> titleWords = Arrays.asList(words);

    private final String[] names = {"claudianus", "ezra", "renault", "phillip", "luciano", "mord", "xymenes", "mar", "ruby", "carly", "ab", "stillmann", "banky", "paton", "arlan", "tyrone", "kelwin", "lyell", "rodolfo", "burlie", "fletch", "phillipe", "langsdon", "christophe", "bartie", "spense", "randell", "edvard", "samuele", "westley", "moses", "ado", "elliott", "hastie", "quintin", "terrence", "beltran", "pincus", "jeremie", "timmy", "thibaud", "jesus", "robbert", "worth", "dean", "shurwood", "torry", "robby", "hillary", "paco", "vail", "roley", "heywood", "winny", "kennett", "gawain", "pooh", "sergeant", "colan", "ozzie", "jan", "cortie", "abrahan", "valle", "wells", "thorndike", "amby", "orville", "guido", "wain", "mannie", "urbano", "piotr", "lowe", "christoph", "lionel", "john", "wheeler", "antin", "darryl", "timothy", "sigismond", "normy", "hadleigh", "sergei", "delaney", "rourke", "leeland", "baird", "elroy", "leighton", "culver", "enrico", "johnnie", "clay", "corbett", "kristofor", "theobald", "mattheus", "johann"};

    private final List<String> authorNames = Arrays.asList(names);
}
