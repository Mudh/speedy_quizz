<<<<<<< Updated upstream
<?php

namespace App\Repository;

use App\Entity\Question;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Question|null find($id, $lockMode = null, $lockVersion = null)
 * @method Question|null findOneBy(array $criteria, array $orderBy = null)
 * @method Question[]    findAll()
 * @method Question[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Question::class);
    }

    public function findFiveQuestionsStepOne($theme) {
        $queryBuilder = $this->createQueryBuilder('question')
            ->join('question.step', 's')
            ->join('question.theme', 't')
            ->andWhere('t.title = :theme')
            ->andWhere('s.name = :step')
            ->setParameter(':step', 'step1')
            ->setParameter(':theme', $theme)
            ->setMaxResults(5)
            ->getQuery();

            return $queryBuilder->execute();
    }

    public function findFiveQuestionsStepTwo($theme) {
        $queryBuilder = $this->createQueryBuilder('question')
            ->join('question.step', 's')
            ->join('question.theme', 't')
            ->andWhere('t.title = :theme')
            ->andWhere('s.name = :step')
            ->setParameter(':step', 'step2')
            ->setParameter(':theme', $theme)
            ->setMaxResults(5)
            ->getQuery();

            return $queryBuilder->execute();
    }

    public function findFiveQuestionsStepThree($theme) {
        $queryBuilder = $this->createQueryBuilder('question')
            ->join('question.step', 's')
            ->join('question.theme', 't')
            ->andWhere('t.title = :theme')
            ->andWhere('s.name = :step')
            ->setParameter(':step', 'step3')
            ->setParameter(':theme', $theme)
            ->setMaxResults(5)
            ->getQuery();

            return $queryBuilder->execute();
    }

    // /**
    //  * @return Question[] Returns an array of Question objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('q.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Question
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
=======
<?php

namespace App\Repository;

use App\Entity\Question;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Question|null find($id, $lockMode = null, $lockVersion = null)
 * @method Question|null findOneBy(array $criteria, array $orderBy = null)
 * @method Question[]    findAll()
 * @method Question[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Question::class);
    }

    public function FindFiveQuestionsStepOne($theme) {
        $queryBuilder = $this->createQueryBuilder('question')
            ->join('question.step', 's')
            ->join('question.theme', 't')
            ->andWhere('t.title = :theme')
            ->andWhere('s.name = :step')
            ->setParameter(':step', 'step1')
            ->setParameter(':theme', $theme)
            ->setMaxResults(5)
            ->getQuery();

            return $queryBuilder->execute();
    }

    public function FindFiveQuestionsStepTwo($theme) {
        $queryBuilder = $this->createQueryBuilder('question')
            ->join('question.step', 's')
            ->join('question.theme', 't')
            ->andWhere('t.title = :theme')
            ->andWhere('s.name = :step')
            ->setParameter(':step', 'step2')
            ->setParameter(':theme', $theme)
            ->setMaxResults(5)
            ->getQuery();

            return $queryBuilder->execute();
    }

    public function FindFiveQuestionsStepThree($theme) {
        $queryBuilder = $this->createQueryBuilder('question')
            ->join('question.step', 's')
            ->join('question.theme', 't')
            ->andWhere('t.title = :theme')
            ->andWhere('s.name = :step')
            ->setParameter(':step', 'step3')
            ->setParameter(':theme', $theme)
            ->setMaxResults(5)
            ->getQuery();

            return $queryBuilder->execute();
    }

    // /**
    //  * @return Question[] Returns an array of Question objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('q.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Question
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
>>>>>>> Stashed changes
